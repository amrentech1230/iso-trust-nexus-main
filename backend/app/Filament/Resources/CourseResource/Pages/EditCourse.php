<?php

namespace App\Filament\Resources\CourseResource\Pages;

use App\Filament\Resources\CourseResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCourse extends EditRecord
{
    protected static string $resource = CourseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    /**
     * Convert the pounds entered in the form into minor units (pence) before
     * saving.
     */
    protected function mutateFormDataBeforeSave(array $data): array
    {
        $data['price_minor'] = (int) round(((float) ($data['price'] ?? 0)) * 100);
        unset($data['price']);

        return $data;
    }
}
