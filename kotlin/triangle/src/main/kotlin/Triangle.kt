class Triangle<out T : Number>(a: T, b: T, c: T) {
    init {
        require(a.toDouble() < b.toDouble() + c.toDouble())
        require(b.toDouble() < a.toDouble() + c.toDouble())
        require(c.toDouble() < a.toDouble() + b.toDouble())
    }

    private val uniqueSides = setOf(a, b, c).size

    val isEquilateral: Boolean = uniqueSides == 1
    val isIsosceles: Boolean =  uniqueSides <= 2
    val isScalene: Boolean = uniqueSides == 3
}
