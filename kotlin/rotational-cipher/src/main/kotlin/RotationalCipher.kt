class RotationalCipher(private val offset: Int) {
    private val lowerCaseChars = ('a'..'z').toList()
    private val upperCaseChars = ('A'..'Z').toList()

    fun encode(text: String): String = text
        .map {
            when (it) {
                in lowerCaseChars -> lowerCaseChars[(lowerCaseChars.indexOf(it) + offset) % 26]
                in upperCaseChars -> upperCaseChars[(upperCaseChars.indexOf(it) + offset) % 26]
                else -> it
            }
        }
        .joinToString("")
}
