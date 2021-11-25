object Series {

    fun slices(n: Int, s: String): List<List<Int>> {
        require(0 < n && n <= s.length)

        return s.windowed(n).map { it.map(Character::getNumericValue) }
    }

}
