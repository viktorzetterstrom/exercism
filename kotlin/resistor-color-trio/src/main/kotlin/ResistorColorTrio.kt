object ResistorColorTrio {
    fun text(vararg input: Color): String {
        val ohms = "${input[0].ordinal}${input[1].ordinal}${"0".repeat(input[2].ordinal)}".toInt()
        return when {
            ohms > 1000_000 -> "${ohms / 1000_000} megaohms"
            ohms > 1000 -> "${ohms / 1000} kiloohms"
            else -> "$ohms ohms"
        }
    }
}
