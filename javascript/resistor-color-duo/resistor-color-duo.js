const COLORS =
  ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

const colorCode = (wantedColor) => COLORS.indexOf(wantedColor);

export const value = colors => Number(
  colors
    .splice(0, 2)
    .map(colorCode)
    .join('')
);
