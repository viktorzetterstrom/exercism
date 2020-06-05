export const proverb = (...args) => {
  const qualifier = args[args.length - 1].qualifier
    ? args.pop().qualifier
    : null;

  let str = "";
  for (let i = 0; i < args.length - 1; i++) {
    str += `For want of a ${args[i]} the ${args[i + 1]} was lost.\n`;
  }

  str += `And all for the want of a ${qualifier ? qualifier + " " : ""}${
    args[0]
  }.`;
  return str;
};
