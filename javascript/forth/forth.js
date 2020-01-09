
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

const isDefinitionCommand = (str) => /^:.*;$/.test(str);
const isNumber = (str) => /^-?[0-9]+$/.test(str);

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
    this._userDefined = {};
  }

  evaluate(inputString) {
    if (isDefinitionCommand(inputString)) return this.addDefinition(inputString);

    const inputRaw = [...inputString.split(' ').map((str) => isNumber(str)
      ? Number(str)
      : str.toLowerCase()
    )];

    const input = [];
    inputRaw.forEach((i) => {
      if (this._userDefined[i]) {
        this._userDefined[i].forEach((u) => {
          input.push(isNumber(u)
            ? Number(u)
            : u.toLowerCase());
        });
      } else {
        input.push(i);
      }
    });

    while (input.length > 0) {
      const next = input.shift();
      if (typeof next === 'string') {
        if (operations[next] === undefined) throw new Error('Unknown command');
        this._stack = operations[next](this._stack);
      } 
      else this._stack.push(next);
    }
  }


  addDefinition(inputString) {
    const [operationName, ...operations] = inputString
      .match(/^:(.*);$/)[1]
      .trim()
      .split(' ');

    if (isNumber(operationName)) throw new Error('Invalid definition');
    this._userDefined[operationName.toLowerCase()] = operations;
  }

  get stack() {
    return this._stack;
  }

}
