object WordCount {
    private val WORD_REGEX = """\w+('\w+)?""".toRegex()

    fun phrase(phrase: String): Map<String, Int> =
        WORD_REGEX
            .findAll(phrase)
            .groupingBy { it.value.toLowerCase() }
            .eachCount()
}
