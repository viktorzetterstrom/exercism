#if !defined(GIGASECOND)
#define GIGASECOND

#include "boost/date_time/posix_time/posix_time.hpp"

using boost::posix_time::ptime;
using boost::posix_time::time_duration;

namespace gigasecond {

  ptime advance(ptime start);

}

#endif