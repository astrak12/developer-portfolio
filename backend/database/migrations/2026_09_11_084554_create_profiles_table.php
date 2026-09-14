Schema::create('profiles', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('headline');
    $table->text('bio');
    $table->string('location')->nullable();
    $table->string('availability')->default('Available for hire');
    $table->string('email');
    $table->string('resume_url')->nullable();
    $table->timestamps();
});