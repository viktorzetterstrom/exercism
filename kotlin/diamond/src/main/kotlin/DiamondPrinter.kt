class DiamondPrinter {
    fun printToList(letter: Char): List<String> {
        require(letter in 'A'..'Z')

        val vertical = ('A' until letter) + (letter downTo 'A')
        val horizontal = (letter downTo 'A') + ('B'..letter)

        return vertical.map { y -> horizontal.map { x -> if (x == y) x else " " }.joinToString("") }
    }
}
