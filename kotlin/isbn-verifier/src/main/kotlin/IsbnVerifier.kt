class IsbnVerifier {

    fun isValid(number: String): Boolean {
        val n = number.replace("-", "")
        if (!Regex("^[0-9]{9}[0-9X]$").matches(n)) return false

        val digits = n.substring(0 ,9).map { it.digitToInt() }
        val control = n.last().let {
            if (it == 'X') 10
            else it.digitToInt()
        }


        return (digits.mapIndexed { i, d -> d * (10 - i)}.sum() + control) % 11 == 0
    }
}
