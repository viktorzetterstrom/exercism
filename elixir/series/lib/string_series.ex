defmodule StringSeries do
  @doc """
  Given a string `s` and a positive integer `size`, return all substrings
  of that size. If `size` is greater than the length of `s`, or less than 1,
  return an empty list.
  """
  @spec slices(s :: String.t(), size :: integer) :: list(String.t())

  def slices(_s, size) when size <= 0, do: []

  def slices(s, size) do
    case String.length(s) do
      length when length < size ->
        []

      length ->
        0..(length - size)
        |> Enum.map(&String.slice(s, &1, size))
    end
  end
end
