Schema::create('contact_messages', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email');
    $table->string('subject')->nullable();
    $table->text('message');
    $table->boolean('is_read')->default(false);
    $table->timestamps();
});