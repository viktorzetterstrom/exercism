#if !defined(GRADE_SCHOOL)
#define GRADE_SCHOOL

#include <map>
#include <string>
#include <vector>

namespace grade_school {

  /**
   * @brief Keeps track of a student roster with grades and names.
   */
  class school {
    public:
      /**
       * @brief Returns a copy of the current roster.
       * @return std::map<int, std::vector<std::string>> Copy of roster.
       */
      std::map<int, std::vector<std::string>> roster();

      /**
       * @brief Adds a student and a grade to the roster.
       * @param name Name of student.
       * @param grade Grade.
       */
      void add(std::string name, int grade);

      /**
       * @brief Returns a sorted vector with all the students of a certain
       * grade.
       * @param p_grade
       * @return std::vector<std::string> Students.
       */
      std::vector<std::string> grade(int p_grade);

    private:
      std::map<int, std::vector<std::string>> m_roster;
  };


}



#endif