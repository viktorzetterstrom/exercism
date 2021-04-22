defmodule RotationalCipher do
  @upper ?A..?Z
  @lower ?a..?z

  @doc """
  Given a plaintext and amount to shift by, return a rotated string.

  Example:
  iex> RotationalCipher.rotate("Attack at dawn", 13)
  "Nggnpx ng qnja"
  """
  @spec rotate(text :: String.t(), shift :: integer) :: String.t()
  def rotate(text, shift) do
    text |> to_charlist() |> Enum.map(&rotate_char(&1, shift)) |> to_string()
  end

  @spec rotate_char(char :: char(), shift :: integer) :: char()
  defp rotate_char(char, shift) do
    cond do
      char in @upper -> ?A + rem(char + shift - ?A, 26)
      char in @lower -> ?a + rem(char + shift - ?a, 26)
      true -> char
    end
  end
end
