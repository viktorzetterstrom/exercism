defmodule PigLatin do
  @doc """
  Given a `phrase`, translate it a word at a time to Pig Latin.

  Words beginning with consonants should have the consonant moved to the end of
  the word, followed by "ay".

  Words beginning with vowels (aeiou) should have "ay" added to the end of the
  word.

  Some groups of letters are treated like consonants, including "ch", "qu",
  "squ", "th", "thr", and "sch".

  Some groups are treated like vowels, including "yt" and "xr".
  """
  @vowels "aeiou"
  @consonants "bcdfghjklmnpqrstvwxyz"

  @spec translate(phrase :: String.t()) :: String.t()
  def translate(phrase) do
    phrase
    |> String.split()
    |> Enum.map(&translate_word/1)
    |> Enum.join(" ")
  end

  @spec translate_word(phrase :: String.t()) :: String.t()
  defp translate_word(word) do
    vowel_regex = Regex.compile!("^([#{@vowels}]|[xy][#{@consonants}]+)")
    consonant_regex = Regex.compile!("^(s?qu|[^#{@vowels}]+)")

    if Regex.match?(vowel_regex, word) do
      word <> "ay"
    else
      [leading_part] = Regex.run(consonant_regex, word, capture: :first)

      String.slice(word, String.length(leading_part)..-1) <> leading_part <> "ay"
    end
  end
end
