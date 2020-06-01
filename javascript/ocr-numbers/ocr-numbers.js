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

export const convert = (numbers) => {
  const numbersArray = numbers.split("\n");

  const lines = [];
  while (numbersArray.length > 0) {
    let [rowOne, rowTwo, rowThree, rowFour] = numbersArray;
    numbersArray.splice(0, 4);

    let line = "";
    while (rowOne.length > 0) {
      const ocr =
        rowOne.substring(0, 3) +
        rowTwo.substring(0, 3) +
        rowThree.substring(0, 3) +
        rowFour.substring(0, 3);

      rowOne = rowOne.substring(3);
      rowTwo = rowTwo.substring(3);
      rowThree = rowThree.substring(3);
      rowFour = rowFour.substring(3);

      const matchingNumber = OCR_NUMBERS_MAP[ocr];
      line += matchingNumber || "?";
    }
    lines.push(line);
  }
  return lines.join(",");
};
