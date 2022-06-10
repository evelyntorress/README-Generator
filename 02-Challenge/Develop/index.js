// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: 'Description',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage',
      },
      {
        type: 'input',
        name: 'website',
        message: 'Link to the WebSite',
      },
      {
        type: 'input',
        name: 'video',
        message: 'Link to the video',
      },
      {
        type: 'input',
        name: 'license',
        message: 'License',
      },
    ]);
  };
  
// TODO: Create a function to write README file
const generateMarkdown = ({ description, installation, usage, website, video, license }) =>
// function writeToFile(fileName, data) {}
`# crispy-rotary-phone

# 09 Node.js Challenge: Professional README Generator

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Link to the web-site
${website}

## Link to the video
${video}

## License
${license}`;

// TODO: Create a function to initialize app
function init() {
    console.log('questions')
    questions()


// Use writeFileSync method to use promises instead of a callback function
.then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));
  };
  
// Function call to initialize app
init();
