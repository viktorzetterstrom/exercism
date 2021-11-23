object Luhn {
    fun isValid(candidate: String): Boolean {
        val digits = candidate.replace(" ", "")
        if (digits.length <= 1 || !digits.all { it.isDigit() }) return false

        return digits
            .map(Character::getNumericValue)
            .reversed()
            .mapIndexed { i, n -> when( i % 2) {
                1 -> (n * 2).let { if (it > 9) it - 9 else it }
                else -> n
                }
            }.sum() % 10 == 0
    }
}
