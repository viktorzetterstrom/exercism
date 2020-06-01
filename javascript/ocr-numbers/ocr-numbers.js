const OCR_NUMBERS_MAP = Object.freeze({
  " _ | ||_|   ": "0",
  "     |  |   ": "1",
  " _  _||_    ": "2",
  " _  _| _|   ": "3",
  "   |_|  |   ": "4",
  " _ |_  _|   ": "5",
  " _ |_ |_|   ": "6",
  " _   |  |   ": "7",
  " _ |_||_|   ": "8",
  " _ |_| _|   ": "9",
});

const ROW_HEIGHT = 4;
const DIGIT_WIDTH = 3;

export const convert = (numbers) => {
  const numbersArray = numbers.split("\n");

  const lines = [];
  while (numbersArray.length > 0) {
    let [rowOne, rowTwo, rowThree, rowFour] = numbersArray;
    numbersArray.splice(0, ROW_HEIGHT);

    let line = "";
    while (rowOne.length > 0) {
      const ocr =
        rowOne.substring(0, DIGIT_WIDTH) +
        rowTwo.substring(0, DIGIT_WIDTH) +
        rowThree.substring(0, DIGIT_WIDTH) +
        rowFour.substring(0, DIGIT_WIDTH);

      rowOne = rowOne.substring(DIGIT_WIDTH);
      rowTwo = rowTwo.substring(DIGIT_WIDTH);
      rowThree = rowThree.substring(DIGIT_WIDTH);
      rowFour = rowFour.substring(DIGIT_WIDTH);

      const matchingNumber = OCR_NUMBERS_MAP[ocr];
      line += matchingNumber || "?";
    }
    lines.push(line);
  }
  return lines.join(",");
};
