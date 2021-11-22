import kotlin.math.pow

object ArmstrongNumber {
    fun check(input: Int): Boolean = "$input".run {
            map(Character::getNumericValue)
            .sumOf { n -> n.toDouble().pow(length).toInt() }
    } == input
}
