defmodule Acronym do
  @doc """
  Generate an acronym from a string.
  "This is a string" => "TIAS"
  """
  @spec abbreviate(String.t()) :: String.t()
  def abbreviate(string) do
    Regex.split(~r/[ _-]+|[a-z](?=[A-Z])/, string)
    |> Enum.map(&first_letter_upcased/1)
    |> Enum.join()
  end

  @spec first_letter_upcased(String.t()) :: String.t()
  defp first_letter_upcased(string),
    do:
      string
      |> String.first()
      |> String.upcase()
end
