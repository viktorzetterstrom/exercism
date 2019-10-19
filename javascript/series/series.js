
export class Series {
  constructor(digitStr) {
    this._digits = [...digitStr].map(Number);
  }

  get digits() {
    return this._digits
  }

  slices(size) {
    if (size > this._digits.length) throw new Error('Slice size is too big.');

    return this._digits
      .filter((_, i) => i < this._digits.length - size + 1)
      .map((_, i) => this._digits.slice(i, i + size));
  }
}
