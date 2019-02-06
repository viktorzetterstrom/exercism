#pragma once

#include <string>
#include <set>
#include <random>

namespace robot_name {
  class robot {
  public:
    robot() { setName(); };
    std::string name() const { return robotName; };
    void reset();

  private:
    std::string robotName; // Robot name.
    void setName(); // Sets new name
    std::string generateName(); // Helps setName generate a new name
    static std::set<std::string> usedNames;
  };
}
