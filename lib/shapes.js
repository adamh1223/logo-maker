class ParentShape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends ParentShape {
  generateSVG() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class Square extends ParentShape {
  generateSVG() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`;
  }
}

class Triangle extends ParentShape {
  generateSVG() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// instantiating a Circle class/ creating a new instance of the Circle class
const circle = new Circle();
const square = new Square();
const triangle = new Triangle();

circle.setColor("blue");

console.log(circle.generateSVG());

module.exports = { Circle, Square, Triangle };
