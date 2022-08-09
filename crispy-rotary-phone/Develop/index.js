// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projecttitle',
        message: 'What is your Project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Instructions for installation:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license are you going to use?',
        choices: ['agpl', 'apache', 'MIT', 'no license']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'List of contributors?:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How many tests have been used for this app?:',
      },
      {
        type: 'input',
        name: 'githubuser',
        message: 'Enter your GitHub user',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email for users to contact you :',
      },
    ]);
  };
  
// TODO: Create a function to write README file
const generateMarkdown = ({ projecttitle, description, installation, usage, license, contributing, test, githubuser, email }) =>

`
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# ${projecttitle}

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${license}

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing
${contributing}

## Testing
${test}

## Questions
 - ${githubuser} - [GitHub](https://github.com/evelyntorress)
 - You can contact me at ${email}


`;

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
