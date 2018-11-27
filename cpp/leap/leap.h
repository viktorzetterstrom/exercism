#if !defined(LEAP)
#define LEAP

namespace leap {

  /**
   * @brief Returns true if a given year is a leap year. The following definition 
   * was used:
   * Every year that is evenly divisible by 4.
   * Except every year that is evenly divisible by 100.
   * Unless the year is also evenly divisible by 400.
   * 
   * @param year Year as an int.
   * @return true If leap year.
   * @return false Otherwise.
   */
  bool is_leap_year(int year);

}



#endif