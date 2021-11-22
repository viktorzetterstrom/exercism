object Acronym {
    fun generate(phrase: String) : String = phrase
        .split(Regex("[ _-]+"))
        .joinToString("") { it.first().uppercase() }
}
