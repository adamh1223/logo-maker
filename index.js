const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const SVG = require("./lib/svg");

const questions = [
  // validate, only allow 3 chars
  {
    type: "input",
    name: "text",
    message: "Type in up to 3 characters to display on your object",
    validate: function (input) {
      if (input.length > 3) {
        return "Text must be 3 characters or less.";
      }
      return true;
    },
  },
  // add a list of colors for the user to choose from
  {
    type: "list",
    name: "color",
    message: "What color would you like the text to be?",
    choices: [
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
    name: "shape",
    message: "What shape would you like to create?",
    choices: ["Circle", "Triangle", "Square"],
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    let svgShape;

    // Based on the type of object the user chooses, create the appropriate class
    switch (answers.shape) {
      case "Circle":
        svgShape = new Circle();
        break;

      case "Triangle":
        svgShape = new Triangle();
        break;

      case "Square":
        svgShape = new Square();
        break;

      default:
        console.log("default");
        break;
    }

    svgShape.setColor(answers.color);

    const svg = new SVG();
    svg.setShape(svgShape);
    svg.setText(answers.text, answers.color);

    const svgContent = svg.render();

    fs.writeFile("output.svg", svgContent, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("SVG file created successfully!");
      }
    });
  });
}

init();
