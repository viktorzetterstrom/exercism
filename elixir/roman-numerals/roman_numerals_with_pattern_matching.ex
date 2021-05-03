defmodule RomanNumerals do
  @doc """
  Convert the number to a roman number.
  """
  @spec numeral(pos_integer) :: String.t()
  def numeral(0), do: ""
  def numeral(num) when num in 1..3, do: "I" <> numeral(num - 1)
  def numeral(num) when num === 4, do: "IV" <> numeral(num - 4)
  def numeral(num) when num in 5..8, do: "V" <> numeral(num - 5)
  def numeral(num) when num === 9, do: "IX" <> numeral(num - 9)
  def numeral(num) when num in 10..39, do: "X" <> numeral(num - 10)
  def numeral(num) when num in 40..49, do: "XL" <> numeral(num - 40)
  def numeral(num) when num in 50..89, do: "L" <> numeral(num - 50)
  def numeral(num) when num in 90..99, do: "XC" <> numeral(num - 90)
  def numeral(num) when num in 100..399, do: "C" <> numeral(num - 100)
  def numeral(num) when num in 400..499, do: "CD" <> numeral(num - 400)
  def numeral(num) when num in 500..899, do: "D" <> numeral(num - 500)
  def numeral(num) when num in 900..999, do: "CM" <> numeral(num - 900)
  def numeral(num) when num >= 1000, do: "M" <> numeral(num - 1000)
end
