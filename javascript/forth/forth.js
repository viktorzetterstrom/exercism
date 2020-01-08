
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

const dup = (stack) => {
  if (stack.length === 0) throw new Error('Stack empty');
  return [...stack, stack[stack.length - 1]];
}

const drop = (stack) => {
  if (stack.length === 0) throw new Error('Stack empty');
  return stack.slice(0, stack.length -1);
}

const swap = (stack) => {
  if (stack.length < 2) throw new Error('Stack empty');
  return [...stack.slice(0, stack.length - 2), stack[stack.length - 1], stack[stack.length - 2]];
}

const over = (stack) => {
  if (stack.length < 2) throw new Error('Stack empty');
  return [...stack, stack[stack.length - 2]];
}

const operations = Object.freeze({
  '+': (stack) => add(stack),
  '-': (stack) => subtract(stack),
  '*': (stack) => multiply(stack),
  '/': (stack) => divide(stack),
  dup,
  drop,
  swap,
  over,
});

export class Forth {
  constructor() {
    this._stack = [];
  }

  evaluate(inputString) {
    if (/^:.*;$/.test(inputString)) return addDefinition(inputString);

    const input = [...inputString.split(' ').map((str) => /^-?[0-9]+$/.test(str)
      ? Number(str)
      : str
    )];



    while (input.length > 0) {
      const next = input.shift();
      if (operations[next] !== undefined) this._stack = operations[next.toLowerCase()](this._stack);
      else this._stack.push(next);
    }
  }

  addDefinition()

  get stack() {
    return this._stack;
  }

}
