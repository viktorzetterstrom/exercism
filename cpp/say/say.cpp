  #include "say.h"

#include <string>

std::string say::in_english(unsigned long long input) {
  // Check input is larger than 0.
  unsigned long long oneTrillion = 1000ULL*1000ULL*1000ULL*1000ULL;
  if (input < 0 || input >= oneTrillion) throw std::domain_error("Bad input");

  // Return "zero" if 0;
  if (input == 0) return "zero";

  // Arrays with words.
  std::string upToTen[] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
  std::string tenToTwenty[] = {"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "eighteen", "nineteen"};
  std::string tensMultiple[] = {"", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};

  // Ouptut string
  std::string words = "";

  // Billions.
  if (input / 1000000000 > 0) {
    words += in_english(input / 1000000000) + " billion";
    input %= 1000000000;
    // Add trailing space if input still > 0.
    if (input > 0) words += " ";
  }

  // Millions.
  if (input / 1000000 > 0) {
    words += in_english(input / 1000000) + " million";
    input %= 1000000;
    // Add trailing space if input still > 0.
    if (input > 0) words += " ";
  }

  // Thousands.
  if (input / 1000 > 0) {
    words += in_english(input / 1000) + " thousand";
    input %= 1000;
    // Add trailing space if input still > 0.
    if (input > 0) words += " ";
  }

  // Hundreds
  if (input / 100 > 0) {
    words += in_english(input / 100) + " hundred";
    input %=100;
    // Add trailing space if input still > 0.
    if (input > 0) words += " ";
  }

  // Between 10 and 20.
  if (input > 10 && input < 20) {
    words += tenToTwenty[input%10];
  } else if (input >= 20) {
    words += tensMultiple[input/10];
    input %= 10;
    // Add '-' for final word if input still > 0.
    if (input > 0) words += "-";
  }

  if (input < 10 && input > 0) {
    words += upToTen[input];
  }

  return words;
}