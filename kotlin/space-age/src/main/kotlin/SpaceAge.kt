class SpaceAge(private val seconds: Int) {

    private val SECONDS_PER_YEAR_ON_EARTH = 31557600
    private val earthYears = (seconds.toDouble() / SECONDS_PER_YEAR_ON_EARTH)

    fun onEarth(): Double = earthYears.twoDecimals()
    fun onMercury(): Double = (earthYears / 0.2408467).twoDecimals()
    fun onVenus(): Double = (earthYears / 0.61519726).twoDecimals()
    fun onMars(): Double = (earthYears / 1.8808158).twoDecimals()
    fun onJupiter(): Double = (earthYears / 11.862615).twoDecimals()
    fun onSaturn(): Double = (earthYears / 29.447498).twoDecimals()
    fun onUranus(): Double = (earthYears / 84.016846).twoDecimals()
    fun onNeptune(): Double = (earthYears / 164.79132).twoDecimals()

    private fun Double.twoDecimals(): Double = "%.2f".format(this).toDouble()
}
