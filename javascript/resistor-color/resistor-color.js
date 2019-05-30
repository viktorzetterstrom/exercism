const COLORS = 
  ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

function colorCode(wantedColor) {
  return COLORS.findIndex(color => color === wantedColor);
}



module.exports = { colorCode, COLORS };