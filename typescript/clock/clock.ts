export default class Clock {
  private minutes: number;
  private readonly MINUTES_PER_HOUR = 60;
  private readonly MINUTES_PER_DAY = 1440;

  constructor(hours: number, minutes: number = 0) {
    this.minutes = this.normalizeTimeToMinutes(hours, minutes);
  }

  toString(): string {
    const hours = Math.floor(this.minutes / this.MINUTES_PER_HOUR)
      .toString()
      .padStart(2, "0");

    const minutes = (this.minutes % this.MINUTES_PER_HOUR)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  plus(minutes: number): Clock {
    this.minutes = this.normalizeTimeToMinutes(0, this.minutes + minutes);
    return this;
  }

  minus(minutes: number): Clock {
    this.minutes = this.normalizeTimeToMinutes(0, this.minutes - minutes);
    return this;
  }

  equals(clock: Clock): boolean {
    return this.minutes === clock.minutes;
  }

  private normalizeTimeToMinutes(hours: number, minutes: number): number {
    const totalMinutes = hours * this.MINUTES_PER_HOUR + minutes;

    const normalizedMinutes =
      totalMinutes >= 0
        ? totalMinutes % this.MINUTES_PER_DAY
        : this.MINUTES_PER_DAY + (totalMinutes % this.MINUTES_PER_DAY);

    return normalizedMinutes;
  }
}
