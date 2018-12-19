#include "gigasecond.h"

boost::posix_time::ptime gigasecond::advance(boost::posix_time::ptime start) {
  boost::posix_time::time_duration gigasec(0, 0, 1000000000, 0);
  return start + gigasec;
}