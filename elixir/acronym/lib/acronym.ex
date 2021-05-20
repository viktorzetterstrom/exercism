defmodule Acronym do
  @doc """
  Generate an acronym from a string.
  "This is a string" => "TIAS"
  """
  @spec abbreviate(String.t()) :: String.t()
  def abbreviate(string) do
    Regex.split(~r/[ _-]+|[a-z](?=[A-Z])/, string)
    |> Enum.map(&String.first/1)
    |> Enum.join()
    |> String.upcase()
  end
end
