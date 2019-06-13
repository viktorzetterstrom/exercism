export const hey = message => {
  const askYell = /^(?=.*[A-Z])[^a-z]+\?+$/;
  const ask = /\?\s*$/;
  const yell = /^(?=.*[A-Z])[^a-z]+$/;
  const silence = /^\s*$/;

  if (askYell.test(message)) return 'Calm down, I know what I\'m doing!';
  if (ask.test(message)) return 'Sure.';
  if (yell.test(message)) return 'Whoa, chill out!';
  if (silence.test(message)) return 'Fine. Be that way!';

  return 'Whatever.';
};