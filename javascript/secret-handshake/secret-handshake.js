
export const secretHandshake = num => {
  if (typeof num !== 'number') throw new Error('Handshake must be a number');
  const binary = num
    .toString(2)
    .split('')
    .reverse();

  const handshake = [];
  if (binary[0] === '1') handshake.push('wink');
  if (binary[1] === '1') handshake.push('double blink');
  if (binary[2] === '1') handshake.push('close your eyes');
  if (binary[3] === '1') handshake.push('jump');
  if (binary[4] === '1') handshake.reverse();

  return handshake;
}
