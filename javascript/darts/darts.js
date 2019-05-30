const OUTER_RADIUS = 10;
const MIDDLE_RADIUS = 5;
const INNER_RADIUS = 1;


function distanceFromCenter(x, y) {
  return Math.sqrt(x*x + y*y);
}

function solve(x, y) {
  const distance = distanceFromCenter(x, y);

  if (distance <= INNER_RADIUS) return 10;
  else if (distance <= MIDDLE_RADIUS) return 5;
  else if (distance <= OUTER_RADIUS) return 1;
  else return 0;
}

module.exports = { solve };
