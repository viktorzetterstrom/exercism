/*
	Package space tells you how many years have passed on differnet planets
*/
package space

import "strings"

type Planet string

// Takes seconds and a planet name and returns the years passed on that planet.
func Age(seconds float64, planet Planet) float64 {
	earthYears := seconds / (60 * 60 * 24 * 365.25)
	switch strings.ToLower(string(planet)) {
	case "mercury":
		return earthYears / 0.2408467
	case "venus":
		return earthYears / 0.61519726
	case "mars":
		return earthYears / 1.8808158
	case "jupiter":
		return earthYears / 11.862615
	case "saturn":
		return earthYears / 29.447498
	case "uranus":
		return earthYears / 84.016846
	case "neptune":
		return earthYears / 164.79132
	}
	return earthYears
}
