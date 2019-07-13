
export class Words {
  count(str) {
    return str
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .reduce((words, current) => ({
        ...words,
        [current]: words.hasOwnProperty(current)
          ? words[current] + 1
          : 1
      }), {});
  }
}
