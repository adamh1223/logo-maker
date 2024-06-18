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

// instantiating a Circle class/ creating a new instance of the Circle class
const circle = new Circle();

circle.setColor("blue");

console.log(circle.generateSVG());

module.exports = { Circle };
