const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { SVG } = require("./lib/svg");

const questions = [
  {
    type: "list",
    name: "shape",
    message: "What shape would you like to create?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "text",
    message: "Type in up to 3 characters to display on your object",
    //Make sure text is 3 characters or less
    validate: function (input) {
      if (input.length > 3) {
        return "Text must be 3 characters or less.";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "shapeColor",
    message: "What color would you like the shape to be?",
    choices: [
      "custom hexadecimal number",
      "red",
      "green",
      "blue",
      "yellow",
      "orange",
      "purple",
      "brown",
      "gray",
    ],
  },
  {
    type: "list",
    name: "textColor",
    message: "What color would you like the text to be?",
    choices: [
      "custom hexadecimal number",
      "black",
      "white",
      "red",
      "green",
      "blue",
      "yellow",
      "orange",
      "purple",
      "brown",
      "gray",
    ],
    when: function (answers) {
      return true; // Always ask this question
    },
  },
];

// Helper function to validate hexadecimal color
function isValidHexColor(color) {
  return /^#[0-9A-F]{6}$/i.test(color);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    let svgShape;

    // Handle custom hexadecimal color input for shape
    if (answers.shapeColor === "custom hexadecimal number") {
      const customShapeColorQuestion = {
        type: "input",
        name: "customShapeColor",
        message:
          "Shape Color: Enter a valid hexadecimal color code (e.g., #FF0000):",
        validate: function (input) {
          if (!isValidHexColor(input)) {
            return "Please enter a valid hexadecimal color code (e.g., #FF0000)";
          }
          return true;
        },
      };

      // Prompt for custom shape color
      inquirer
        .prompt(customShapeColorQuestion)
        .then((customShapeColorAnswer) => {
          svgShape = createShape(answers.shape);
          svgShape.setColor(customShapeColorAnswer.customShapeColor);

          // Handle text color selection
          handleTextColor(answers.textColor, svgShape, answers.text);
        });
    } else {
      // Use predefined shape color
      svgShape = createShape(answers.shape);
      svgShape.setColor(answers.shapeColor);

      // Handle text color selection
      handleTextColor(answers.textColor, svgShape, answers.text);
    }
  });
}

// Helper function to handle text color selection
function handleTextColor(textColorChoice, svgShape, text) {
  if (textColorChoice === "custom hexadecimal number") {
    const customTextColorQuestion = {
      type: "input",
      name: "customTextColor",
      message:
        "Text Color: Enter a valid hexadecimal color code (e.g., #FF0000):",
      validate: function (input) {
        if (!isValidHexColor(input)) {
          return "Please enter a valid hexadecimal color code (e.g., #FF0000)";
        }
        return true;
      },
    };

    // Prompt for custom text color
    inquirer.prompt(customTextColorQuestion).then((customTextColorAnswer) => {
      createSVGFile(svgShape, text, customTextColorAnswer.customTextColor);
    });
  } else {
    // Use predefined text color
    createSVGFile(svgShape, text, textColorChoice);
  }
}

// Create the shape desired by the user
function createShape(shapeName) {
  switch (shapeName) {
    case "Circle":
      return new Circle();
    case "Triangle":
      return new Triangle();
    case "Square":
      return new Square();
    default:
      throw new Error("Invalid shape selected");
  }
}

// Create the SVG file, given a shape, text, and color
function createSVGFile(svgShape, text, textColor) {
  const svg = new SVG();
  svg.setShape(svgShape);
  svg.setText(text, textColor);

  const svgContent = svg.render();

  fs.writeFile("output.svg", svgContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("SVG file created successfully!");
    }
  });
}

init();
