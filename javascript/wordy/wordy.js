export class ArgumentError extends Error {
  constructor(...args) {
    super(...args);
  }
}

export class WordProblem {
  constructor(question) {
    this.question = question
      .replace(/what is/i, '')
      .replace(/\?$/, '')
      .trim()
      .split(' ');
  }

  answer() {
    const args = this.question;
    let result = Number.parseInt(args.shift(), 10);

    while (args.length > 0) {
      const operator = args.shift();
      if (operator === 'multiplied' || operator === 'divided')
        args.shift(); // Remove 'by' in case of multiplication or division

      const arg = Number.parseInt(args.shift());
      switch(operator) {
        case 'plus': result += arg; break;
        case 'minus': result -= arg; break;
        case 'multiplied': result *= arg; break;
        case 'divided': result /= arg; break;
        default: throw new ArgumentError();
      }
    }
    return result;
  }
}
