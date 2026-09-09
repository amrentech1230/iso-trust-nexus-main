<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Models\Order;
use Filament\Infolists;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

/**
 * Read-only view of PayPal orders. Orders are created by the payment flow, not
 * by admins, so this resource only lists and shows records.
 */
class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-credit-card';

    protected static ?string $navigationGroup = 'Sales';

    protected static ?int $navigationSort = 1;

    public static function getNavigationBadge(): ?string
    {
        return (string) Order::where('status', Order::STATUS_PAID)->count();
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('Order #')
                    ->sortable(),
                Tables\Columns\TextColumn::make('course.code')
                    ->label('Course')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('customer_email')
                    ->label('Customer')
                    ->description(fn (Order $r) => $r->customer_name)
                    ->searchable(),
                Tables\Columns\TextColumn::make('amount_minor')
                    ->label('Amount')
                    ->money(fn (Order $r) => $r->currency, divideBy: 100)
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state) => match ($state) {
                        Order::STATUS_PAID => 'success',
                        Order::STATUS_PENDING => 'warning',
                        Order::STATUS_FAILED => 'danger',
                        Order::STATUS_REFUNDED => 'gray',
                        default => 'gray',
                    })
                    ->sortable(),
                Tables\Columns\TextColumn::make('paypal_order_id')
                    ->label('PayPal order')
                    ->limit(18)
                    ->toggleable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('paid_at')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->placeholder('—'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        Order::STATUS_PENDING => 'Pending',
                        Order::STATUS_PAID => 'Paid',
                        Order::STATUS_FAILED => 'Failed',
                        Order::STATUS_REFUNDED => 'Refunded',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist->schema([
            Infolists\Components\Section::make('Order')->schema([
                Infolists\Components\TextEntry::make('id')->label('Order #'),
                Infolists\Components\TextEntry::make('status')->badge(),
                Infolists\Components\TextEntry::make('course.title')->label('Course'),
                Infolists\Components\TextEntry::make('amount_minor')
                    ->label('Amount')
                    ->money(fn (Order $r) => $r->currency, divideBy: 100),
                Infolists\Components\TextEntry::make('paid_at')->dateTime()->placeholder('—'),
                Infolists\Components\TextEntry::make('created_at')->dateTime(),
            ])->columns(2),

            Infolists\Components\Section::make('Customer')->schema([
                Infolists\Components\TextEntry::make('customer_name')->placeholder('—'),
                Infolists\Components\TextEntry::make('customer_email')->placeholder('—')->copyable(),
            ])->columns(2),

            Infolists\Components\Section::make('PayPal')->schema([
                Infolists\Components\TextEntry::make('paypal_order_id')->placeholder('—')->copyable(),
                Infolists\Components\TextEntry::make('paypal_capture_id')->placeholder('—')->copyable(),
            ])->columns(2),
        ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'view' => Pages\ViewOrder::route('/{record}'),
        ];
    }

    /** Disable manual creation of orders. */
    public static function canCreate(): bool
    {
        return false;
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->with('course');
    }
}
