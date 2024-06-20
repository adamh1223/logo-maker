class ParentShape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends ParentShape {
  render() {
    return `<circle cx="125" cy="110" r="80" fill="${this.color}"/>`;
  }
}

class Square extends ParentShape {
  render() {
    return `<rect x="10" y="10" width="200" height="200" fill="${this.color}"/>`;
  }
}

class Triangle extends ParentShape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
