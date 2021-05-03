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
  def numeral(0), do: ""

  def numeral(num) do
    {roman_numeral, numeral_value} =
      Enum.find(@roman_numerals, fn {_, x} ->
        x <= num
      end)

    roman_numeral <> numeral(num - numeral_value)
  end
end
