<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CareerApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\File;
use Throwable;

class CareerApplicationController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'designation' => ['required', 'string', 'max:255'],
            'experience' => ['required', 'integer', 'min:0', 'max:80'],
            'location' => ['required', 'string', 'max:150'],
            'email' => ['required', 'email', 'max:255'],
            'mobile' => ['required', 'string', 'max:40'],
            'country' => ['required', 'string', 'max:100'],
            'message' => ['nullable', 'string', 'max:10000'],
            'consent' => ['accepted'],
            'source' => ['nullable', 'json'],
            'qualification_year' => ['nullable', 'array', 'max:10'],
            'qualification_year.*' => ['nullable', 'string', 'max:20'],
            'qualification_title' => ['nullable', 'array', 'max:10'],
            'qualification_title.*' => ['nullable', 'string', 'max:255'],
            'resume' => ['nullable', File::types(['pdf', 'doc', 'docx'])->max(5120)],
            'qualification_files' => ['nullable', 'array', 'max:10'],
            'qualification_files.*' => ['nullable', File::types(['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx'])->max(5120)],
        ]);

        $qualifications = [];
        $years = $validated['qualification_year'] ?? [];
        $titles = $validated['qualification_title'] ?? [];
        foreach (array_unique(array_merge(array_keys($years), array_keys($titles))) as $index) {
            $year = trim($years[$index] ?? '');
            $title = trim($titles[$index] ?? '');
            if ($year !== '' || $title !== '') {
                $qualifications[] = ['year' => $year, 'title' => $title];
            }
        }

        $attachments = [];
        try {
            $resume = $request->file('resume');
            if ($resume) {
                $attachments[] = $this->storeAttachment($resume, 'Resume');
            }
            foreach ($request->file('qualification_files', []) as $index => $file) {
                if ($file) {
                    $title = $titles[$index] ?? 'Qualification';
                    $attachments[] = $this->storeAttachment($file, trim($title) ?: 'Qualification');
                }
            }

            $application = DB::transaction(fn () => CareerApplication::create([
                'reference' => CareerApplication::generateReference(),
                'name' => $validated['name'],
                'designation' => $validated['designation'],
                'experience' => $validated['experience'],
                'location' => $validated['location'],
                'email' => $validated['email'],
                'mobile' => $validated['mobile'],
                'country' => $validated['country'],
                'message' => $validated['message'] ?? null,
                'qualifications' => $qualifications,
                'attachments' => $attachments,
                'source' => isset($validated['source'])
                    ? json_decode($validated['source'], true, flags: JSON_THROW_ON_ERROR)
                    : null,
                'consented_at' => now(),
                'status' => 'new',
            ]));
        } catch (Throwable $exception) {
            foreach ($attachments as $attachment) {
                Storage::disk('local')->delete($attachment['path']);
            }

            throw $exception;
        }

        return response()->json(['reference' => $application->reference], 201);
    }

    private function storeAttachment(UploadedFile $file, string $label): array
    {
        $directory = 'career-applications/'.now()->format('Y/m');
        $extension = $file->guessExtension() ?: 'bin';
        $filename = Str::uuid().'.'.$extension;
        $path = $file->storeAs($directory, $filename, 'local');
        if (! $path) {
            abort(500, 'The application attachment could not be saved.');
        }

        return [
            'label' => $label,
            'name' => $file->getClientOriginalName(),
            'path' => $path,
        ];
    }
}
