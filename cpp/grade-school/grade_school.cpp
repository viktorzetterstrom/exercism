#include "grade_school.h"

std::map<int, std::vector<std::string>> grade_school::school::roster() {
  std::map<int, std::vector<std::string>> rosterCopy = m_roster;
  return rosterCopy;
}

void grade_school::school::add(std::string name, int grade) {
  m_roster[grade].push_back(name);
  std::sort(m_roster[grade].begin(), m_roster[grade].end());
}

std::vector<std::string> grade_school::school::grade(int p_grade) {
  if (!roster().empty()) {
    std::vector<std::string> grades = m_roster[p_grade];
    std::sort(grades.begin(), grades.end());
    return grades;
  } else {
    std::vector<std::string> emptyVector;
    return emptyVector;
  }
}