
const add = (stack) => {
  if (stack.length < 2) throw new Error('Stack empty');
  return [...stack.slice(0, stack.length - 2), stack[stack.length - 2] + stack[stack.length - 1]]
}

const subtract = (stack) => {
  if (stack.length < 2) throw new Error('Stack empty');
  return [...stack.slice(0, stack.length - 2), stack[stack.length - 2] - stack[stack.length - 1]]
}

const multiply = (stack) => {
  if (stack.length < 2) throw new Error('Stack empty');
  return [...stack.slice(0, stack.length - 2), stack[stack.length - 2] * stack[stack.length - 1]]
}

const divide = (stack) => {
  if (stack.length < 2) throw new Error('Stack empty');
  if (stack[stack.length - 1] === 0) throw new Error('Division by zero');
  return [...stack.slice(0, stack.length - 2), Math.floor(stack[stack.length - 2] / stack[stack.length - 1])]
}

const operations = Object.freeze({
  '+': (stack) => add(stack),
  '-': (stack) => subtract(stack),
  '*': (stack) => multiply(stack),
  '/': (stack) => divide(stack),
});

const hasOperation = (stack) => operations[stack[stack.length - 1]] !== undefined;

export class Forth {

  constructor() {
    this._stack = [];
  }

  evaluate(input) {
    this._stack = [...input.split(' ').map((str) => /^-?[0-9]+$/.test(str)
      ? Number(str)
      : str
    )];

    while (hasOperation(this._stack)) {
      const operationFunction = operations[this._stack.pop()];
      this._stack = operationFunction(this._stack);
    }
  }

  get stack() {
    return this._stack;
  }

}
