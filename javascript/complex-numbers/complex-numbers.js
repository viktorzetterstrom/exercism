export class ComplexNumber {
  constructor(real = 0, imag = 0) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(cNum) {
    return new ComplexNumber(
      this._real + cNum.real, 
      this._imag + cNum.imag);
  }

  sub(cNum) {
    return new ComplexNumber(
      this._real - cNum.real, 
      this._imag - cNum.imag);
  }

  div(cNum) {
    return new ComplexNumber(
      ((this._real * cNum.real) + (this._imag * cNum.imag)) / (cNum.real**2 + cNum.imag**2),
      ((this._imag * cNum.real) - (this._real * cNum.imag)) / (cNum.real**2 + cNum.imag**2)
    );
  }

  mul(cNum) {
    return new ComplexNumber(
      (this._real * cNum.real) - (this._imag * cNum.imag),
      (this._imag * cNum.real) + (this._real * cNum.imag)
    );
  }

  get abs() {
    return Math.sqrt(this._real**2 + this._imag**2);
  }

  get conj() {
    return new ComplexNumber(
      this._real,
      this._imag === 0 
        ? 0 
        : -this._imag
    );
  }

  get exp() {
    return new ComplexNumber(
      Math.exp(this._real) * Math.cos(this._imag),
      Math.exp(this._real) * Math.sin(this._imag)
    );
  }
}
