object Pangram {
    fun isPangram(input: String): Boolean =
        ('a'..'z').all { it in input.toLowerCase() }
}
