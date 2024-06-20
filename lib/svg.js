class SVG {
  constructor() {
    this.textData = "";
    this.shapeData = "";
  }

  /**
   * render()
   * return the svg with the shapedata and textdata
   */
  render() {
    return `<svg version="1.1" width="250" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeData}
      ${this.textData}
    </svg>`;
  }

  /**
   * setText()
   * it is going to accept the text data
   * return a string matching a text tag for an svg with the color (in case there is any text)
   * make sure you throw error in case the text is longer than 3 chars
   */
  setText(text, color) {
    if (text.length > 3) {
      throw new Error("Text must be 3 characters or less.");
    }
    this.textData = `<text x="125" y="125" font-size="60" text-anchor="middle" fill="black">${text}</text>`;
  }

  /**
   * setShape()
   * call the render() method of the shape which will return the svg
   * store it in this.shapeData
   */
  setShape(shape) {
    this.shapeData = shape.render();
  }
}

module.exports = SVG;
