defmodule ProteinTranslation do
  @codon_protein %{
    "UGU" => "Cysteine",
    "UGC" => "Cysteine",
    "UUA" => "Leucine",
    "UUG" => "Leucine",
    "AUG" => "Methionine",
    "UUU" => "Phenylalanine",
    "UUC" => "Phenylalanine",
    "UCU" => "Serine",
    "UCC" => "Serine",
    "UCA" => "Serine",
    "UCG" => "Serine",
    "UGG" => "Tryptophan",
    "UAU" => "Tyrosine",
    "UAC" => "Tyrosine",
    "UAA" => "STOP",
    "UAG" => "STOP",
    "UGA" => "STOP"
  }

  @doc """
  Given an RNA string, return a list of proteins specified by codons, in order.
  """
  @spec of_rna(String.t()) :: {atom, list(String.t())}
  def of_rna(rna) do
    rna
    |> Stream.unfold(&String.split_at(&1, 3))
    |> Enum.take_while(&(&1 != ""))
    |> Enum.reduce_while({:ok, []}, fn codon, {:ok, acc} ->
      case of_codon(codon) do
        {:ok, "STOP"} -> {:halt, {:ok, acc}}
        {:ok, protein} -> {:cont, {:ok, acc ++ [protein]}}
        {:error, message} -> {:halt, {:error, message}}
      end
    end)
  end

  @doc """
  Given a codon, return the corresponding protein
  """
  @spec of_codon(String.t()) :: {atom, String.t()}
  def of_codon(codon) do
    case(String.length(codon)) do
      3 ->
        protein = Map.get(@codon_protein, codon)
        if protein != nil, do: {:ok, protein}, else: {:error, "invalid RNA"}

      _ ->
        {:error, "invalid codon"}
    end
  end
end
