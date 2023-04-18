// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (response) => {
  const readme = `
# ${response.projectName}

${generateBadge(response.license)}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

\`\`\`
${response.commandLine}
\`\`\`

## Usage

${response.usage}

## License

${generateNotice(response.license)}

${generateBadge(response.license)}

## Contributing

${response.contribution}

## Tests

To run tests, run the following command:

\`\`\`
${response.testCommand}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact ${response.username} directly at ${response.email}.
  `;
  return readme;
}

const generateBadge = (license) => {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
};

const generateNotice = (license) => {
  switch (license) {
    case 'MIT':
      return 'This project is licensed under the MIT License.';
    case 'Apache 2.0':
      return 'This project is licensed under the Apache 2.0 License.';
    case 'GPL 3.0':
      return 'This project is licensed under the GPL 3.0 License.';
    case 'BSD 3':
      return 'This project is licensed under the BSD 3-Clause License.';
    default:
      return '';
  }
};


// TODO: Create an array of questions for user input
/* const questions = []; */
const init = async () => {
  try {
    const response = await inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your projects name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
      },
      {
        type: 'input',
        name: 'commandLine',
        message: 'What command should I run to install dependencies?',
      },
      {
        type: 'input',
        name: 'testCommand',
        message: 'What command should I run to run tests?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
    ])
    
    const readme = generateREADME(response);

    // await fs.promises.writeFile('README.md', readme);

    fs.writeFile('NEWREADME.md', readme, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README generated!');
      }
    });

  } catch (err) {
    console.log(err);
  }
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
