export class Zipper {
  constructor(tree, history) {
    this.tree = JSON.parse(JSON.stringify(tree));
    this.history = history || [];
  }

  toTree() {
    return this.tree;
  }

  get position() {
    let position = this.tree;
    this.history.forEach((event) => {
      if (!event) return event;
      switch (event) {
        case "left":
          position = position.left;
          break;
        case "right":
          position = position.right;
          break;
      }
    });
    return position;
  }

  left() {
    this.history.push("left");
    return this.position && new Zipper(this.tree, this.history);
  }

  right() {
    this.history.push("right");
    return this.position && new Zipper(this.tree, this.history);
  }

  up() {
    if (this.history.length === 0) return null;
    this.history.pop();
    return this.position && new Zipper(this.tree, this.history);
  }

  setValue(value) {
    this.position.value = value;
    return this.position && new Zipper(this.tree, this.history);
  }

  setLeft(left) {
    this.position.left = left;
    return this.position && new Zipper(this.tree, this.history);
  }

  setRight(right) {
    this.position.right = right;
    return this.position && new Zipper(this.tree, this.history);
  }

  value() {
    return this.position.value;
  }

  static fromTree(tree) {
    return new Zipper(tree);
  }
}
