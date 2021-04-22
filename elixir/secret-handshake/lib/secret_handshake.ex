defmodule SecretHandshake do
  use Bitwise, skip_operators: true

  @action_codes %{1 => "wink", 2 => "double blink", 4 => "close your eyes", 8 => "jump"}
  @reverse_action_code 16

  @spec should_perform_action(action_code :: integer, code :: integer) :: boolean()
  defp should_perform_action(action_code, code) do
    band(action_code, code) > 0
  end

  @spec handle_reverse(action_list :: list(String.t()), code :: integer) :: list(String.t())
  defp(handle_reverse(action_list, code)) do
    if should_perform_action(@reverse_action_code, code),
      do: action_list |> Enum.reverse(),
      else: action_list
  end

  @doc """
  Determine the actions of a secret handshake based on the binary
  representation of the given `code`.

  If the following bits are set, include the corresponding action in your list
  of commands, in order from lowest to highest.

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump

  10000 = Reverse the order of the operations in the secret handshake
  """
  @spec commands(code :: integer) :: list(String.t())
  def commands(code) do
    action_list =
      for {action_code, action} <- @action_codes,
          should_perform_action(action_code, code),
          do: action

    handle_reverse(action_list, code)
  end
end
