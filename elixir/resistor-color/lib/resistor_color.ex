defmodule ResistorColor do
  @color_values [
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  ]

  @spec colors() :: list(String.t())
  def colors, do: @color_values |> Keyword.keys |> Enum.map(&to_string/1)

  @spec code(String.t()) :: integer()
  def code(color), do: @color_values[String.to_atom(color)]
end
