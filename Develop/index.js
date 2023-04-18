// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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
        type: 'input',
        name: 'license',
        message: 'What should your project have?',
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
