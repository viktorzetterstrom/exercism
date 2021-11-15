object ScrabbleScore {
    fun scoreWord(input: String) = input.toUpperCase().sumBy {
        when (it) {
            in "AEIOULNRST" -> 1
            in "DG" -> 2
            in "BCMP" -> 3
            in "FHVWY" -> 4
            in "K" -> 5
            in "JX" -> 8
            in "QZ" -> 10
            else -> 0
        }
    }
}
