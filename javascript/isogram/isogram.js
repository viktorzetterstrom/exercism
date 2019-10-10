
export const isIsogram = input => {
  const letters = input
    .replace(/\W/g,'')
    .toLowerCase()
  return letters.split('').length === new Set(letters).size;
};
