#if !defined(RNA_TRANSCRIPTION)
#define RNA_TRANSCRIPTION

#include <string>

namespace transcription {
  
  char to_rna(char dna);
  std::string to_rna(std::string dna);
}

#endif