class Allergies(private val score: Int) {
    private val allergicTo: List<Allergen> = Allergen.values().mapNotNull {
        if (it.score and score > 0) it
        else null
    }

    fun getList(): List<Allergen> = allergicTo
    fun isAllergicTo(allergen: Allergen) = allergicTo.contains(allergen)
}
