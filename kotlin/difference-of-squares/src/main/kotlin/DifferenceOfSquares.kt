import kotlin.math.pow

class Squares(private val limit: Int) {

    fun sumOfSquares() = (1..limit).sumBy { it * it }

    fun squareOfSum() = (1..limit).sum().toDouble().pow(2).toInt()

    fun difference() = squareOfSum() - sumOfSquares()
}
