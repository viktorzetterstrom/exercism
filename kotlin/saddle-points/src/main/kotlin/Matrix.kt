data class MatrixCoordinate(val row: Int, val col: Int)

class Matrix(private val rows: List<List<Int>>) {
    val saddlePoints = mutableSetOf<MatrixCoordinate>()

    init {
        rows.forEachIndexed() { y, row ->
            row.forEachIndexed() { x, value ->
                val rowOk = row.all { value >= it }
                val colOk =  rows.all { value <= it[x]}

                if (rowOk && colOk)
                    saddlePoints.add(MatrixCoordinate(y + 1, x + 1))
            }
        }
    }
}