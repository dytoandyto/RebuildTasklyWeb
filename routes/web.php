<?php

use App\Http\Controllers\RolePermissionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'role:super-admin'])->group(function () {
    
    Route::get('/permissions', [RolePermissionController::class, 'index'])->name('permissions.index');
    Route::post('/permissions/toggle', [RolePermissionController::class, 'update'])->name('permissions.toggle');
        
});

require __DIR__.'/settings.php';