enum Planets {
  Earth = "earth",
  Mercury = "mercury",
  Venus = "venus",
  Mars = "mars",
  Jupiter = "jupiter",
  Saturn = "saturn",
  Uranus = "uranus",
  Neptune = "neptune",
}

const roundTwoDecimals = (num: number): number => Number(num.toFixed(2));

class SpaceAge {
  private readonly earthYearSeconds = 31557600;
  public relativeOrbitalPeriods: Record<Planets, number> = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  constructor(public seconds: number) {}

  onEarth(): number {
    return roundTwoDecimals(this.seconds / this.earthYearSeconds);
  }
  onMercury(): number {
    return roundTwoDecimals(
      this.seconds /
        (this.earthYearSeconds * this.relativeOrbitalPeriods[Planets.Mercury])
    );
  }
  onVenus(): number {
    return roundTwoDecimals(
      this.seconds /
        (this.earthYearSeconds * this.relativeOrbitalPeriods[Planets.Venus])
    );
  }
  onMars(): number {
    return roundTwoDecimals(
      this.seconds /
        (this.earthYearSeconds * this.relativeOrbitalPeriods[Planets.Mars])
    );
  }
  onJupiter(): number {
    return roundTwoDecimals(
      this.seconds /
        (this.earthYearSeconds * this.relativeOrbitalPeriods[Planets.Jupiter])
    );
  }
  onSaturn(): number {
    return roundTwoDecimals(
      this.seconds /
        (this.earthYearSeconds * this.relativeOrbitalPeriods[Planets.Saturn])
    );
  }
  onUranus(): number {
    return roundTwoDecimals(
      this.seconds /
        (this.earthYearSeconds * this.relativeOrbitalPeriods[Planets.Uranus])
    );
  }
  onNeptune(): number {
    return roundTwoDecimals(
      this.seconds /
        (this.earthYearSeconds * this.relativeOrbitalPeriods[Planets.Neptune])
    );
  }
}

export default SpaceAge;
