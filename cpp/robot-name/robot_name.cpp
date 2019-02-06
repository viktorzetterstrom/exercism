#include "robot_name.h"

std::set<std::string> robot_name::robot::usedNames;

void robot_name::robot::setName()  {
  // Generate name and see if it exists
  std::string newName = generateName();
  bool nameAlreadyExists = usedNames.find(newName) != usedNames.end();
  // If it already exists, try again
  while (nameAlreadyExists) {
    newName = generateName();
    nameAlreadyExists = usedNames.find(newName) != usedNames.end();
  }

  // Add name to set of names
  usedNames.insert(newName);

  // Assign name
  robotName = newName;
}

// Generates random robot names.
std::string robot_name::robot::generateName() {
  // Names contain upper case letters and numbers
  const std::vector<char> upperCaseLetters = {'A', 'B', 'C', 'D', 'E', 'F', 'G',
                          'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
                          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
  const std::vector<char> digits = {'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'};

  // Create random name
  std::string newName;
  // 2 upper case letters
  const int numberOfLetters = 2;
  for (int i = 0; i < numberOfLetters; i++) {
    char randomLetter = upperCaseLetters[rand() % upperCaseLetters.size()];
    newName.push_back(randomLetter);
  }

  // 3 digits
  const int numberOfDigits = 3;
  for (int i = 0; i < numberOfDigits; i++) {
    char randomDigit = digits[rand() % digits.size()];
    newName.push_back(randomDigit);
  }

  return newName;
}

void robot_name::robot::reset() {
  // Find and erase name from used names.
  auto it = usedNames.find(robotName);
  usedNames.erase(it);
  setName();
}