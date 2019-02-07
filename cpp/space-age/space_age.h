#pragma once

namespace space_age {


  class space_age {
  public:
    space_age(double age_in_seconds): age_in_seconds(age_in_seconds) {};

    double seconds() const {
      return age_in_seconds;
    }

    double on_earth() const {
      return age_in_seconds / EARTH_ORBIT_SECONDS;
    }

    double on_mercury() const {
      double mercury_seconds = EARTH_ORBIT_SECONDS * MERCURY_ORBIT_YEARS;
      return age_in_seconds / mercury_seconds;
    }

    double on_venus() const {
      double venus_seconds = EARTH_ORBIT_SECONDS * VENUS_ORBIT_YEARS;
      return age_in_seconds / venus_seconds;
    }

    double on_mars() const {
      double mars_seconds = EARTH_ORBIT_SECONDS * MARS_ORBIT_YEARS;
      return age_in_seconds / mars_seconds;
    }

    double on_jupiter() const {
      double jupiter_seconds = EARTH_ORBIT_SECONDS * JUPITER_ORBIT_YEARS;
      return age_in_seconds / jupiter_seconds;
    }

    double on_saturn() const {
      double saturn_seconds = EARTH_ORBIT_SECONDS * SATURN_ORBIT_YEARS;
      return age_in_seconds / saturn_seconds;
    }

    double on_uranus() const {
      double uranus_seconds = EARTH_ORBIT_SECONDS * URANUS_ORBIT_YEARS;
      return age_in_seconds / uranus_seconds;
    }

    double on_neptune() const {
      double neptune_seconds = EARTH_ORBIT_SECONDS * NEPTUNE_ORBIT_YEARS;
      return age_in_seconds / neptune_seconds;
    }

  private:
    double age_in_seconds;
  
    // Earth orbit data.
    constexpr static int EARTH_ORBIT_SECONDS = 31557600;

    // Other planets orbit data.
    constexpr static double MERCURY_ORBIT_YEARS = 0.2408467;
    constexpr static double VENUS_ORBIT_YEARS = 0.61519726;
    constexpr static double MARS_ORBIT_YEARS = 1.8808158;
    constexpr static double JUPITER_ORBIT_YEARS = 11.862615;
    constexpr static double SATURN_ORBIT_YEARS = 29.447498;
    constexpr static double URANUS_ORBIT_YEARS = 84.016846;
    constexpr static double NEPTUNE_ORBIT_YEARS = 164.79132;

  };

}