## create and setup laravel backend (Run => php artisan serve) on port 3000
- cmd => composer create-project laravel/laravel code_gallery_backend
- set DB_DATABASE="code_gallery" in .env file
- write "\App\Models\User::factory(10)->create();" in DatabaseSeeder.php file
- cmd => php artisan migrate:fresh --seed
- routes/api.php Ex. **use App\Models\User;** and **Route::get('/users', function () { $users = User::get(); return response()->json($users); });**
- cmd => php artisan optimize
- config/cors.php add => 'allowed_origins' => ['http://localhost:3000/']
- cmd => php artisan optimize
