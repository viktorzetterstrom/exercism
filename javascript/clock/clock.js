const padInt = i => i.toString().padStart(2, '0');
const normalizeHour = h => h > 0
  ? h % 24
  : (24 + h % 24) % 24

const normalizeMinute = m => m > 0
  ? m % 60
  : (60 + m % 60) % 60;

  const rollOverMinutes = (h, m) => normalizeHour(h + Math.floor(m / 60) % 24);

class Clock {
  constructor(h = 0, m = 0) {
    this._h = rollOverMinutes(normalizeHour(h), m);
    this._m = normalizeMinute(m);
  }

  plus(m) {
    const newM = this._m + m;
    this._h = rollOverMinutes(this._h, newM);

    this._m = normalizeMinute(newM);
    return this;
  }

  minus(m) {
    const newM = this._m - m;
    this._h = rollOverMinutes(this._h, newM);

    this._m = normalizeMinute(newM);
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }

  toString() {
    return padInt(this._h) + ':' + padInt(this._m);
  }
}

export const at = (...args) => new Clock(...args);
