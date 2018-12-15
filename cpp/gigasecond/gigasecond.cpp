#include "gigasecond.h"

ptime gigasecond::advance(ptime start) {
  time_duration gigasec(0, 0, 1000000000, 0);
  return start + gigasec;
}