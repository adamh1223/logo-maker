const { Circle, Triangle, Square } = require("./shapes");

describe("Test suite for Circle shape", () => {
  it("Should accept a color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    const generatedSVG = circle.render();

    expect(generatedSVG).toEqual(
      `<circle cx="150" cy="100" r="80" fill="blue"/>`
    );
  });
});
