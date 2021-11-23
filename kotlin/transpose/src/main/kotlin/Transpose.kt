object Transpose {
    fun transpose(input: List<String>): List<String> =
        MutableList(input.maxByOrNull { it.length }?.length ?: 0) { "" }
            .also {
                for ((j, str) in input.withIndex()) {
                    for ((i, chr) in str.withIndex())
                        it[i] = it[i].padEnd(j, ' ') + chr
                }
            }
}
