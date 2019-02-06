#pragma once

#include <string>
#include <bitset>
#include <unordered_set>

namespace allergies {

  class allergy_test {
  public: 
    allergy_test(int allergy_score);
    bool is_allergic_to(std::string allergen);
    std::unordered_set<std::string> get_allergies() { return allergies; };

  private:
    std::unordered_set<std::string> allergies;
  };
}