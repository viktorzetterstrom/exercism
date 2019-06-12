function gigasecond(startDate) {
  const gigaSec = 1000000000000;
  return  new Date(startDate.getTime() + gigaSec);
}

module.exports = { gigasecond };
