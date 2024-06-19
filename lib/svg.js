class SVG {
  constructor() {
    // textData
    this.textData = "";
    // shapeData
  }

  /**
   * render()
   * return the svg with the shapedata and textdata
   */

  render() {
    return `<svg version="1" width="250" height="200" xmlns="http://www.w3.org/2000/svg">${this.textData}</svg>`;
  }

  /**
   * settext()
   * it is going to accept the text data
   * return a string matching a text tag for an svg wth the color (in case there is any text)
   * ake sure you throw error in case the text is longer than 3 chars
   */

  /**
   * setshape()
   * call the render() method which will return the svg
   * store it in this.shapeData
   *
   */
}
