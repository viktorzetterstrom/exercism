class Matrix(private val matrixAsString: String) {
    private val matrix: List<List<Int>> = matrixAsString
        .split("\n")
        .map { row ->
            row.trim().split("""\s+""".toRegex())
                .map { valStr -> valStr.toInt() }
        }

    fun column(colNr: Int): List<Int> = matrix.map { it[colNr - 1] }

    fun row(rowNr: Int): List<Int> = matrix[rowNr - 1]
}
