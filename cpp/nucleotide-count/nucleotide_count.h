#if !defined(NUCLEOTIDE_COUNT)
#define NUCLEOTIDE_COUNT

#include <map>
#include <string>

namespace dna {

  /**
   * @brief Class that counts the different nucleotides of a dna-string.
   */
  class counter {
    public:
    /**
     * @brief Construct a new counter object. Also validates string with 
     * validateDnaString();
     * 
     * @param pDna dna-string.
     */
    counter(std::string pDnaString);

    /**
     * @brief Counts and returns a map with the count of the different
     * nucleotides of the dna.
     * 
     * @pre dna string must contain sequence of only the chars 'G' 'C' 'T' 'A'
     * @throws std::invalid_argument
     * @return std::map<char, int> Count of different nucleotides.
     */
    std::map<char, int> nucleotide_counts() const;

    /**
     * @brief Returns number of occurences of a specific nucleotide in the
     * dna string.
     * 
     * @pre dna string must contain sequence of only the chars 'G' 'C' 'T' 'A'
     * @param nucleotide
     * @return unsigned int Ocurrences of specified nucleotide.
     */
    unsigned int count(char nucleotide) const;

    private:
      std::string dnaString;

      /**
       * @brief validates that a dna-string only contains the chars 
       * 'G' 'C' 'T' 'A'
       * 
       * @param dnaStr dna string
       * @return true if valid dna string.
       */
      bool validateDnaString(std::string dnaStr);
  };
}

#endif