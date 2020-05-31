export class InputCell {
  constructor(value) {
    this.value = value;
    this._observers = [];
  }

  setValue(value) {
    this.value = value;
    this.notifyObservers();
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  notifyObservers() {
    this._observers.forEach((observer) => observer.onChange());
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this._inputCells = inputCells;
    this._fn = fn;
    this._callbacks = [];
    this.value = this._fn(inputCells);

    this._inputCells.forEach((cell) => {
      cell.addObserver(this);
    });
  }

  addObserver(observer) {
    this._inputCells.forEach((cell) => {
      cell.addObserver(observer);
    });
  }

  onChange() {
    this.updateValue();
  }

  updateValue() {
    const previousValue = this.value;
    this.value = this._fn(this._inputCells);
    if (this.value != previousValue) {
      this._callbacks.forEach((cb) => cb.onEvent(this));
    }
  }

  addCallback(cb) {
    this._callbacks.push(cb);
  }

  removeCallback(cb) {
    this._callbacks = this._callbacks.filter((callback) => callback != cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this._fn = fn;
    this.values = [];
  }

  onEvent(cell) {
    this.values.push(this._fn(cell));
  }
}
