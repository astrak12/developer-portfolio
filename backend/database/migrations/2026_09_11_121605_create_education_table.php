public function up(): void
{
    Schema::create('education', function (Blueprint $table) {
        $table->id();
        $table->string('institution');
        $table->string('degree');
        $table->string('field_of_study');
        $table->string('start_year');
        $table->string('end_year');
        $table->text('description')->nullable();
        $table->timestamps();
    });
}