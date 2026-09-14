public function up(): void
{
    Schema::create('experiences', function (Blueprint $table) {
        $table->id();
        $table->string('company');
        $table->string('role');
        $table->string('period');
        $table->text('description');
        $table->timestamps();
    });
}