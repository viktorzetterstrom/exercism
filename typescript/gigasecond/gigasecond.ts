export default class Gigasecond {
  private readonly GIGASECOND = 10 ** 9;
  private _date: Date;

  constructor(date: Date) {
    this._date = this.addGigasecond(date);
  }

  date() {
    return this._date;
  }

  private addGigasecond(date: Date): Date {
    date.setSeconds(date.getSeconds() + this.GIGASECOND);
    return date;
  }
}
