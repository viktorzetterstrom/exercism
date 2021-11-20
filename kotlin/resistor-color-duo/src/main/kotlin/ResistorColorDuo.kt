object ResistorColorDuo {
    fun value(vararg colors: Color): Int = "${colors[0].ordinal}${colors[1].ordinal}".toInt()
}
