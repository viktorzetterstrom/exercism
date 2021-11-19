object Isogram {
    fun isIsogram(input: String): Boolean = input
        .toLowerCase()
        .filter(Char::isLetter)
        .groupBy { it }
        .all { it.value.size == 1 }

}
