object PigLatin {
    private val vowelStartRegex = Regex("^([aeiou]|xr|yt)")
    private val consonantStartRegex = Regex("^(s?qu|thr?|s?ch|rh|[bcdfghjklmnpqrstvwxyz])")

    private fun translateWord(word: String): String {
        if(vowelStartRegex.containsMatchIn(word)) return word + "ay"

        val match = consonantStartRegex.find(word)?.groups?.get(0)?.value
        return word.replace(consonantStartRegex, "") + match + "ay"
    }

    fun translate(phrase: String): String = phrase
        .split(Regex("""\s"""))
        .joinToString(" ") { translateWord(it) }
}
