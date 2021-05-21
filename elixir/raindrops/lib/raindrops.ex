defmodule Raindrops do
  @sounds [
    {3, "Pling"},
    {5, "Plang"},
    {7, "Plong"}
  ]

  @doc """
  Returns a string based on raindrop factors.

  - If the number contains 3 as a prime factor, output 'Pling'.
  - If the number contains 5 as a prime factor, output 'Plang'.
  - If the number contains 7 as a prime factor, output 'Plong'.
  - If the number does not contain 3, 5, or 7 as a prime factor,
    just pass the number's digits straight through.
  """
  @spec convert(pos_integer) :: String.t()
  def convert(number) do
    @sounds
    |> Enum.map(fn
      {divisor, sound} when rem(number, divisor) === 0 -> sound
      _ -> ""
    end)
    |> combine_sounds(number)
  end

  defp combine_sounds(["", "", ""], number), do: to_string(number)
  defp combine_sounds(sounds, _), do: Enum.join(sounds)
end
