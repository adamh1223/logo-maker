const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  // validate, only allow 3 chars
  {
    type: "input",
    name: "text",
    message: "Type in up to 3 characters to display on your object",
  },
  // add a list of colors for the user to choose from
  {
    type: "list",
    name: "color",
    message: "What color would you like the text to be?",
    choices: ["red", "green", "blue"],
  },
  {
    type: "list",
    name: "shape",
    message: "what shape would you like to create?",
    choices: ["Circle", "Triangle", "Square"],
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    // writeToFile("README.md", markdown);
    console.log(answers);

    let svgShape;

    // based on the type of object the user chooses, you will have to create an appropriate class
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
  });
}

init();
