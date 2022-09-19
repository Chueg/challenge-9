// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = ["Project Name? ", "What was the motivation?", "How to install?", "What is the usage?", "What kind of tests are there?","Chose the appropriate license for this project: "];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    
    fs.writeFile(fileName, generateMarkdown(data),(err) =>
    err ? console.log(err) : console.log('Successfully created READ ME!'))


}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'motivation',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: "list",
            name: "license",
            message: questions[5],
            choices: [
                
                "MIT",
                "GPLv2",
                "Apache",
                "BSD3-clause",
                "BSD 2-clause",
                "LGPLv3",
                "AGPLv3",
                'none'
            ]
        },
        {
            type: 'input',
            message: questions[4],
            name: 'tests'
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ])
    .then(function slam(response){
        writeToFile('README.md', response);
    })
}

// Function call to initialize app
init();
