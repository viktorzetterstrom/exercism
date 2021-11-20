class Anagram(private val source: String) {

    private fun isAnagram(candidate: String): Boolean {
        val candidateLower = candidate.toLowerCase()
        val sourceLower = source.toLowerCase()
        if (candidateLower == sourceLower) return false

        val candidateLetters = candidateLower.toList().groupBy { it }
        val sourceLetters = sourceLower.toList().groupBy { it }
        return candidateLetters == sourceLetters
    }

    fun match(anagrams: Collection<String>): Set<String> =
        anagrams.filter { isAnagram(it) }.toSet()
}
