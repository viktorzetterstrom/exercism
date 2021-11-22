object Bob {
    fun hey(input: String): String {
        val i = input.trim()

        val isShouting = i.any(Char::isLetter) && input == i.uppercase()
        val isAsking = i.endsWith("?")
        val isSilence = i.isBlank()

        if (isShouting && isAsking) return "Calm down, I know what I'm doing!"
        if (isShouting) return "Whoa, chill out!"
        if (isAsking) return "Sure."
        if (isSilence) return "Fine. Be that way!"
        return "Whatever."
    }
}
