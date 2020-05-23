
const RectangleGeometry = Object.freeze({
  corner: 1,
  side: 2,
});


export class Rectangles {

  static count(columns) {
    const geometry = [];
    columns.forEach(column => geometry.push([...column]));

    
    return 0;
  }
}


const actual = Rectangles.count([
  '+-+',
  '| |',
  '+-+',
]);
console.log(actual);