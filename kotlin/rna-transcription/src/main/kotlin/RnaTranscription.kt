val transcriptionMap = mapOf(
    'G' to 'C',
    'C' to 'G',
    'T' to 'A',
    'A' to 'U'
)

fun transcribeToRna(dna: String): String = dna
    .map(transcriptionMap::get)
    .joinToString("")
