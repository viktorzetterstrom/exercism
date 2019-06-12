export const age = (planet, seconds) => {
  const secondsInYear = 365.25 * 24 * 60 * 60;
  const planetYears = new Map([
    ['earth', 1], ['mercury', 0.2408467], ['venus', 0.61519726],
    ['mars', 1.8808158], ['jupiter', 11.862615], ['saturn', 29.447498],
    ['uranus', 84.016846], ['neptune', 164.79132]
  ]);
  const yearFraction = seconds / ( planetYears.get(planet) * secondsInYear );
  return +yearFraction.toFixed(2);
};
