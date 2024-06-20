const { SVG } = require("./svg");
const { Circle, Square } = require("./shapes");

// Test suite for setText()
describe("Test suite for setText()", () => {
  it("Should throw an error if text length is more than 3 characters", () => {
    const svg = new SVG();
    expect(() => svg.setText("aaaa", "black")).toThrow(
      "Text must be 3 characters or less."
    );
  });

  it("Should set the text data if text length is 3 characters or less", () => {
    const svg = new SVG();
    svg.setText("abc", "black");
    expect(svg.textData).toEqual(
      `<text x="148" y="125" font-size="60" text-anchor="middle" fill="black">abc</text>`
    );
  });
});

// Test suite for setShape()
describe("Test suite for setShape()", () => {
  it("Should set the shape data correctly", () => {
    const svg = new SVG();
    const circle = new Circle();
    circle.setColor("blue");
    svg.setShape(circle);
    expect(svg.shapeData).toEqual(
      `<circle cx="150" cy="112" r="80" fill="blue"/>`
    );
  });
});

// Test suite for render()
describe("Test suite for render()", () => {
  it("Should return the SVG with shapeData and textData", () => {
    const svg = new SVG();
    const circle = new Circle();
    circle.setColor("blue");
    svg.setShape(circle);
    svg.setText("abc", "black");
    const generatedSVG = svg.render();

    expect(generatedSVG).toEqual(
      `<svg version="1.1" width="250" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="112" r="80" fill="blue"/>
      <text x="148" y="125" font-size="60" text-anchor="middle" fill="black">abc</text>
    </svg>`
    );
  });

  it("Should return the SVG with only shapeData if no textData is set", () => {
    const svg = new SVG();
    const square = new Square();
    square.setColor("green");
    svg.setShape(square);
    const generatedSVG = svg.render();

    expect(generatedSVG).toEqual(
      `<svg version="1.1" width="250" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="55" y="30" width="200" height="200" fill="green"/>
      
    </svg>`
    );
  });

  it("Should return the SVG with only textData if no shapeData is set", () => {
    const svg = new SVG();
    svg.setText("xyz", "black");
    const generatedSVG = svg.render();

    expect(generatedSVG).toEqual(
      `<svg version="1.1" width="250" height="200" xmlns="http://www.w3.org/2000/svg">
      
      <text x="148" y="125" font-size="60" text-anchor="middle" fill="black">xyz</text>
    </svg>`
    );
  });
});
