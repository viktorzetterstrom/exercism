data class Year(val year: Int) {
    val isLeap: Boolean by lazy {
        when {
            isEvenlyDivisible(400) -> true
            isEvenlyDivisible(100) -> false
            isEvenlyDivisible(4) -> true
            else -> false
        }
    }

    private fun isEvenlyDivisible(divisor: Int): Boolean = year.mod(divisor) == 0
}
