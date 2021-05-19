defmodule Bob do
  @spec hey(input :: String.t()) :: String.t()
  def hey(input) do
    input = String.trim(input)

    cond do
      is_shouting(input) && is_question(input) -> "Calm down, I know what I'm doing!"
      is_shouting(input) -> "Whoa, chill out!"
      is_question(input) -> "Sure."
      is_silence(input) -> "Fine. Be that way!"
      true -> "Whatever."
    end
  end

  @spec is_shouting(input :: String.t()) :: boolean()
  defp is_shouting(input) do
    Regex.match?(~r/^[^a-z]+!?\??$/, input) && Regex.match?(~r/[A-Я]/, input)
  end

  @spec is_question(input :: String.t()) :: boolean()
  defp is_question(input), do: Regex.match?(~r/\?$/, input)

  @spec is_silence(input :: String.t()) :: boolean()
  defp is_silence(input), do: Regex.match?(~r/^\s*$/, input)
end
