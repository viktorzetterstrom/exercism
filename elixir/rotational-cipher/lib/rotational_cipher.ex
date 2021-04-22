defmodule RotationalCipher do
  @doc """
  Given a plaintext and amount to shift by, return a rotated string.

  Example:
  iex> RotationalCipher.rotate("Attack at dawn", 13)
  "Nggnpx ng qnja"
  """
  @spec rotate(text :: String.t(), shift :: integer) :: String.t()
  def rotate(text, shift) do
    text |> to_charlist() |> rotate_charlist(shift) |> to_string()
  end

  @spec rotate_charlist(clist :: charlist(), shift :: integer) :: charlist()
  defp rotate_charlist(clist, shift) do
    Enum.map(clist, &rotate_char(&1, shift))
  end

  @spec rotate_char(char :: char(), shift :: integer) :: char()
  defp rotate_char(char, shift) do
    case char do
      uppercase when uppercase in 65..90 -> 65 + rem(char + shift - 65, 26)
      lowercase when lowercase in 97..122 -> 97 + rem(char + shift - 97, 26)
      _ -> char
    end
  end
end
