<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CareerApplicationResource\Pages;
use App\Models\CareerApplication;
use Filament\Forms;
use Filament\Infolists;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Storage;

class CareerApplicationResource extends Resource
{
    protected static ?string $model = CareerApplication::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    protected static ?string $navigationGroup = 'People';

    protected static ?string $navigationLabel = 'Career applications';

    protected static ?int $navigationSort = 1;

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('reference')
                    ->searchable()
                    ->copyable()
                    ->weight('bold'),
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('designation')
                    ->searchable()
                    ->limit(40),
                Tables\Columns\TextColumn::make('email')
                    ->searchable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state) => $state === 'new' ? 'warning' : 'success')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Received')
                    ->dateTime('d M Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'new' => 'New',
                        'reviewed' => 'Reviewed',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\Action::make('downloadAttachment')
                    ->label('Download file')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->form([
                        Forms\Components\Select::make('path')
                            ->label('Attachment')
                            ->options(fn (CareerApplication $record): array => collect($record->attachments ?? [])
                                ->mapWithKeys(fn (array $attachment): array => [
                                    $attachment['path'] => $attachment['label'].' — '.$attachment['name'],
                                ])
                                ->all())
                            ->required(),
                    ])
                    ->action(function (CareerApplication $record, array $data) {
                        $attachment = collect($record->attachments ?? [])
                            ->firstWhere('path', $data['path']);
                        abort_unless($attachment, 404);

                        return Storage::disk('local')->download(
                            $attachment['path'],
                            $attachment['name'],
                        );
                    })
                    ->visible(fn (CareerApplication $record): bool => count($record->attachments ?? []) > 0),
                Tables\Actions\Action::make('markReviewed')
                    ->label('Mark reviewed')
                    ->icon('heroicon-o-check')
                    ->requiresConfirmation()
                    ->action(fn (CareerApplication $record) => $record->update(['status' => 'reviewed']))
                    ->visible(fn (CareerApplication $record): bool => $record->status === 'new'),
                Tables\Actions\DeleteAction::make(),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist->schema([
            Infolists\Components\Section::make('Applicant')->schema([
                Infolists\Components\TextEntry::make('reference')->copyable(),
                Infolists\Components\TextEntry::make('status')->badge(),
                Infolists\Components\TextEntry::make('name'),
                Infolists\Components\TextEntry::make('designation'),
                Infolists\Components\TextEntry::make('experience')->suffix(' years'),
                Infolists\Components\TextEntry::make('email')->copyable(),
                Infolists\Components\TextEntry::make('mobile')->copyable(),
                Infolists\Components\TextEntry::make('location'),
                Infolists\Components\TextEntry::make('country'),
                Infolists\Components\TextEntry::make('created_at')->dateTime(),
            ])->columns(2),
            Infolists\Components\Section::make('Application details')->schema([
                Infolists\Components\TextEntry::make('message')
                    ->columnSpanFull()
                    ->placeholder('No message provided'),
                Infolists\Components\TextEntry::make('qualifications')
                    ->formatStateUsing(fn (?array $state): string => collect($state ?? [])
                        ->map(fn (array $item): string => trim(($item['year'] ?? '').' — '.($item['title'] ?? ''), ' —'))
                        ->implode("\n"))
                    ->placeholder('No qualifications provided')
                    ->columnSpanFull(),
                Infolists\Components\TextEntry::make('attachments')
                    ->formatStateUsing(fn (?array $state): string => collect($state ?? [])
                        ->map(fn (array $item): string => ($item['label'] ?? 'File').' — '.($item['name'] ?? ''))
                        ->implode("\n"))
                    ->placeholder('No files attached')
                    ->columnSpanFull(),
            ]),
        ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCareerApplications::route('/'),
            'view' => Pages\ViewCareerApplication::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}
