class Series(private val series: String) {

    init {
        require(Regex("^\\d*$").matches(series))
    }

    private fun product(str: String): Long = str
        .map(Character::getNumericValue)
        .fold(1) { n, acc -> n * acc}

    fun getLargestProduct(span: Int): Long {
        require(0 <= span && span <= series.length)

        return (0..(series.length - span))
            .map { product(series.substring(it, it + span)) }
            .maxOrNull() ?: 0
    }

}
