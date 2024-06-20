const { Circle, Triangle, Square } = require("./shapes");

//test suite for circle
describe("Test suite for Circle shape", () => {
  it("Should accept a color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    const generatedSVG = circle.render();

    expect(generatedSVG).toEqual(
      `<circle cx="150" cy="112" r="80" fill="blue"/>`
    );
  });
});

//test suite for square
describe("Test suite for Square shape", () => {
  it("Should accept a color", () => {
    const square = new Square();
    square.setColor("green");
    const generatedSVG = square.render();

    expect(generatedSVG).toEqual(
      `<rect x="55" y="30" width="200" height="200" fill="green"/>`
    );
  });
});

//test suite for triangle
describe("Test suite for Triangle shape", () => {
  it("Should accept a color", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    const generatedSVG = triangle.render();

    expect(generatedSVG).toEqual(
      `<polygon points="150, 25 244, 182 56, 182" fill="red" />`
    );
  });
});
