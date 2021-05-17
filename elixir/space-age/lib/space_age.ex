defmodule SpaceAge do
  @type planet ::
          :mercury
          | :venus
          | :earth
          | :mars
          | :jupiter
          | :saturn
          | :uranus
          | :neptune

  @earth_orbital_period_in_seconds 31_557_600

  @orbital_periods_in_seconds %{
    mercury: @earth_orbital_period_in_seconds * 0.2408467,
    venus: @earth_orbital_period_in_seconds * 0.61519726,
    earth: @earth_orbital_period_in_seconds,
    mars: @earth_orbital_period_in_seconds * 1.8808158,
    jupiter: @earth_orbital_period_in_seconds * 11.862615,
    saturn: @earth_orbital_period_in_seconds * 29.447498,
    uranus: @earth_orbital_period_in_seconds * 84.016846,
    neptune: @earth_orbital_period_in_seconds * 164.79132
  }

  @doc """
  Return the number of years a person that has lived for 'seconds' seconds is
  aged on 'planet'.
  """
  @spec age_on(planet, pos_integer) :: float
  def age_on(:mercury, seconds), do: seconds / @orbital_periods_in_seconds.mercury
  def age_on(:venus, seconds), do: seconds / @orbital_periods_in_seconds.venus
  def age_on(:earth, seconds), do: seconds / @orbital_periods_in_seconds.earth
  def age_on(:mars, seconds), do: seconds / @orbital_periods_in_seconds.mars
  def age_on(:jupiter, seconds), do: seconds / @orbital_periods_in_seconds.jupiter
  def age_on(:saturn, seconds), do: seconds / @orbital_periods_in_seconds.saturn
  def age_on(:uranus, seconds), do: seconds / @orbital_periods_in_seconds.uranus
  def age_on(:neptune, seconds), do: seconds / @orbital_periods_in_seconds.neptune
end
