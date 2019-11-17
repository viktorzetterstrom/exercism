/*
	Package space tells you how many years have passed on differnet planets
*/
package space

type Planet string

var orbitalPeridods = map[Planet]float64{
	"Earth":   1.0,
	"Mercury": 0.2408467,
	"Venus":   0.61519726,
	"Mars":    1.8808158,
	"Jupiter": 11.862615,
	"Saturn":  29.447498,
	"Uranus":  84.016846,
	"Neptune": 164.79132,
}

// Takes seconds and a planet name and returns the years passed on that planet.
func Age(seconds float64, planet Planet) float64 {
	earthYears := seconds / (60 * 60 * 24 * 365.25)
	return earthYears / orbitalPeridods[planet]
}
