//Create ParentShape class, and include the properties that they should all have in common
class ParentShape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}
//Create each shape class, input the string that will correctly output each shape with the color selected by the user
class Circle extends ParentShape {
  render() {
    return `<circle cx="150" cy="112" r="80" fill="${this.color}"/>`;
  }
}

class Square extends ParentShape {
  render() {
    return `<rect x="55" y="30" width="200" height="200" fill="${this.color}"/>`;
  }
}

class Triangle extends ParentShape {
  render() {
    return `<polygon points="150, 25 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
