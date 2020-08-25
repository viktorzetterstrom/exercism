export default class BinarySearch {
  public array: number[] | undefined;

  constructor(array: number[]) {
    if (this.isSortedAsc(array)) {
      this.array = array;
    }
  }

  indexOf(target: number) {
    if (!this.array) return -1;

    let left = 0;
    let right = this.array.length - 1;
    while (left <= right) {
      const middle = Math.floor(right - left);
      if (this.array[middle] > target) right = middle - 1;
      else if (this.array[middle] < target) left = middle + 1;
      else return middle;
    }
    return -1;
  }

  private isSortedAsc(array: number[]): boolean {
    return array.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
  }
}
