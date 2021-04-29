defmodule RomanNumerals do
  @roman_numerals [
    {"M", 1000},
    {"CM", 900},
    {"D", 500},
    {"CD", 400},
    {"C", 100},
    {"XC", 90},
    {"L", 50},
    {"XL", 40},
    {"X", 10},
    {"IX", 9},
    {"V", 5},
    {"IV", 4},
    {"I", 1}
  ]

  @doc """
  Convert the number to a roman number.
  """
  @spec numeral(pos_integer) :: String.t()
  def numeral(number), do: add_numerals({number, ""})

  @spec add_numerals({pos_integer, String.t()}) :: {pos_integer(), String.t()} | String.t()
  defp add_numerals({0, numeral_acc}), do: numeral_acc

  defp add_numerals({remainder, numeral_acc}) do
    {numeral, value} =
      Enum.find(@roman_numerals, fn {_, value} ->
        value <= remainder
      end)

    add_numerals({remainder - value, numeral_acc <> numeral})
  end
end
