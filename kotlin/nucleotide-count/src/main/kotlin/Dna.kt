class Dna(nucleotides: String) {

    init {
        require(Regex("^[ACGT]*$").matches(nucleotides))
    }

    val nucleotideCounts: Map<Char, Int> = mapOf(
        'A' to nucleotides.count { it == 'A' },
        'C' to nucleotides.count { it == 'C' },
        'G' to nucleotides.count { it == 'G' },
        'T' to nucleotides.count { it == 'T' }
    )
    
}
