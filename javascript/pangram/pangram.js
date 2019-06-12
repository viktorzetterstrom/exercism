export const isPangram = word => {
  const letters = 'abcdefghijklmopqrstuvwxyz'.split('');
  for (let letter of letters)
    if (!word.toLowerCase.includes(letter))
      return false;

  return true;
};
