const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Type in up to 3 characters to display on your object",
  },
  {
    type: "input",
    name: "color",
    message: "What color would you like the text to be?",
  },
  {
    type: "input",
    name: "shape",
    message:
      "what shape would you like to create? (circle, triangle, or square",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    // const markdown = generateMarkdown(answers);
    // writeToFile("README.md", markdown);

    console.log(answers);
  });
}

init();
