export const isPangram = word => {
  const letters = [...'abcdefghijklmopqrstuvwxyz'];
  return letters.every(letter => word.toLowerCase().includes(letter));
};
