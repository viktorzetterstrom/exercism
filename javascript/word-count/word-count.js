
export class Words {
  count(str) {
    return str
      .trim()
      .split(/[ \n\t]+/g)
      .map(word => word.toLowerCase())
      .reduce((words, current) => ({
        ...words,
        [current]: words.hasOwnProperty(current)
          ? words[current] + 1
          : 1
      }), {});
  }
}
