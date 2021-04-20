defmodule RnaTranscription do
  @doc """
  Transcribes a single DNA nucleotide to its RNA complement
  """
  @type dna_nucleotide :: ?G | ?C | ?T | ?A
  @type rna_complement :: ?C | ?G | ?A | ?U
  @spec translate_dna_nucleotide(dna_nucleotide()) :: rna_complement()
  def translate_dna_nucleotide(s) do
    case s do
      ?G -> ?C
      ?C -> ?G
      ?T -> ?A
      ?A -> ?U
    end
  end

  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

  iex> RnaTranscription.to_rna('ACTG')
  'UGAC'
  """
  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    Enum.map(dna, &RnaTranscription.translate_dna_nucleotide/1)
  end
end
