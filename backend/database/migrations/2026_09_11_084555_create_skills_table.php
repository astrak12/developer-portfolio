Schema::create('skills', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('category'); // e.g., Frontend, Backend, AI
    $table->string('proficiency_label'); // e.g., Primary, Strong
    $table->integer('years_experience')->nullable();
    $table->boolean('is_featured')->default(false);
    $table->timestamps();
});