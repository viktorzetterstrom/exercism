#include "allergies.h"

allergies::allergy_test::allergy_test(int allergy_score) {
  std::bitset<8> allergy_bitset(allergy_score);

  // Check bitset positions.
  if (allergy_bitset.test(0)) allergies.insert("eggs");
  if (allergy_bitset.test(1)) allergies.insert("peanuts");
  if (allergy_bitset.test(2)) allergies.insert("shellfish");
  if (allergy_bitset.test(3)) allergies.insert("strawberries");
  if (allergy_bitset.test(4)) allergies.insert("tomatoes");
  if (allergy_bitset.test(5)) allergies.insert("chocolate");
  if (allergy_bitset.test(6)) allergies.insert("pollen");
  if (allergy_bitset.test(7)) allergies.insert("cats");

}

bool allergies::allergy_test::is_allergic_to(std::string allergen) {
  return allergies.find(allergen) != allergies.end();
}