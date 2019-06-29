export class List {
  constructor(arr = []) {
    this.values = arr
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(lists) {
    lists.values.forEach(list => this.append(list));
    return this;
  }

  filter(filterFn) {
    const newValues = [];
    this.values.forEach(value => {
      if (filterFn(value)) newValues.push(value);
    });
    this.values = newValues;
    return this;
  }

  map(mapFn) {
    const newValues = [];
    this.values.forEach(value => newValues.push(mapFn(value)));
    this.values = newValues;
    return this;
  }

  length() {
    let length = 0;
    this.values.forEach(() => length++);
    return length;
  }

  foldl(foldFn, acc) {
    this.values.forEach(value => acc = foldFn(acc, value));
    return acc;
  }

  foldr(foldFn, acc) {
    this.reverse().values.forEach(value => acc = foldFn(acc, value));
    return acc;
  }

  reverse() {
    const newValues = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      newValues.push(this.values[i]);
    }
    this.values = newValues;
    return this;
  }
}
