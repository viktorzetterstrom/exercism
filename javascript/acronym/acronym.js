export const parse = sentence => sentence
  .split(/[\s-_]+/)
  .map(word => word[0])
  .join('')
  .toUpperCase();