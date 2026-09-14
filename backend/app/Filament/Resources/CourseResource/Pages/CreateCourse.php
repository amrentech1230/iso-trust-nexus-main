<?php

namespace App\Filament\Resources\CourseResource\Pages;

use App\Filament\Resources\CourseResource;
use Filament\Resources\Pages\CreateRecord;

class CreateCourse extends CreateRecord
{
    protected static string $resource = CourseResource::class;

    /**
     * Convert the pounds entered in the form into minor units (pence) before
     * persisting.
     */
    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['price_minor'] = (int) round(((float) ($data['price'] ?? 0)) * 100);
        unset($data['price']);

        return $data;
    }
}
