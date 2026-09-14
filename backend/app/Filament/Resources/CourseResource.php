<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CourseResource\Pages;
use App\Models\Course;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

/**
 * Full CRUD for training courses. Prices are edited in pounds here but stored
 * as integer minor units (pence) on the model, so admins never touch code to
 * change a price.
 */
class CourseResource extends Resource
{
    protected static ?string $model = Course::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';

    protected static ?string $navigationGroup = 'Catalogue';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Course details')->schema([
                Forms\Components\TextInput::make('code')
                    ->label('Standard code')
                    ->placeholder('ISO 9001:2015')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('slug')
                    ->helperText('URL segment. Must match the frontend, e.g. "iso-9001".')
                    ->required()
                    ->alphaDash()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                Forms\Components\TextInput::make('discipline')
                    ->maxLength(255),
                Forms\Components\Select::make('category')
                    ->options([
                        'Quality' => 'Quality',
                        'Security' => 'Security',
                        'Safety' => 'Safety',
                        'Environment' => 'Environment',
                        'Service' => 'Service',
                        'Laboratory' => 'Laboratory',
                        'Risk' => 'Risk',
                    ]),
                Forms\Components\Textarea::make('summary')
                    ->rows(3)
                    ->columnSpanFull(),
            ])->columns(2),

            Forms\Components\Section::make('Pricing & availability')->schema([
                Forms\Components\TextInput::make('price')
                    ->label('Price')
                    ->helperText('Price per delegate. Stored internally in minor units.')
                    ->numeric()
                    ->minValue(0)
                    ->step(0.01)
                    ->prefix('£')
                    ->required()
                    // Convert minor units (pence) <-> pounds for editing.
                    ->formatStateUsing(fn ($record) => $record ? $record->price_minor / 100 : 0)
                    ->dehydrated(false)
                    ->live(onBlur: true),
                Forms\Components\Select::make('currency')
                    ->options(['GBP' => 'GBP (£)', 'USD' => 'USD ($)', 'EUR' => 'EUR (€)'])
                    ->default('GBP')
                    ->required(),
                Forms\Components\Toggle::make('is_active')
                    ->label('Active (shown on the website)')
                    ->default(true),
            ])->columns(2),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('code')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->limit(40)
                    ->wrap(),
                Tables\Columns\TextColumn::make('category')
                    ->badge()
                    ->sortable(),
                Tables\Columns\TextColumn::make('price_minor')
                    ->label('Price')
                    ->money(fn (Course $record) => $record->currency, divideBy: 100)
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'Quality' => 'Quality',
                        'Security' => 'Security',
                        'Safety' => 'Safety',
                        'Environment' => 'Environment',
                        'Service' => 'Service',
                        'Laboratory' => 'Laboratory',
                        'Risk' => 'Risk',
                    ]),
                Tables\Filters\TernaryFilter::make('is_active')->label('Active'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('title');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCourses::route('/'),
            'create' => Pages\CreateCourse::route('/create'),
            'edit' => Pages\EditCourse::route('/{record}/edit'),
        ];
    }
}
