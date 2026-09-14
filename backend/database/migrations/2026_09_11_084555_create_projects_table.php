Schema::create('projects', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('slug')->unique();
    $table->text('summary');
    $table->longText('description')->nullable();
    $table->string('category');
    $table->string('status')->default('Completed');
    $table->boolean('is_featured')->default(false);
    $table->json('tech_stack')->nullable(); // Disimpan sebagai JSON array
    $table->string('live_url')->nullable();
    $table->string('repository_url')->nullable();
    $table->timestamps();
});