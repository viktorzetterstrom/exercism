
export class PhoneNumber {
  constructor(number) {
    const cleanedNumbers = number
      .replace(/\D/g, '')
      .replace(/^1/, '');
    this._number = /^[2-9]\d{2}[2-9]\d{6}$/.test(cleanedNumbers)
      ? cleanedNumbers
      : null;
  }

  number() {
    return this._number;
  }
}
