// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

const READYorNOT = [
    {
        type: 'list',
        name: 'yesorno',
        message: 'You cool with all that?\n Are you ready to begin?',
        choices: ['Yes', 'No'],
    },
];

const questions = [
    //GENERAL QUESTIONS ABOUT PROJECT
    {
        type: 'input',
        message: `\x1b[31m=== General Questions ===\x1b[0m
    Who is creating this project?`,
        name: 'author',
        default: `\x1b[32m[Matty L]\x1b[0m`,
    },
    {
        type: 'input',
        message: `What is the name of the project?`,
        name: 'projName',
        default: `\x1b[32m[TBD]\x1b[0m`,
    },
    {
        type: 'input',
        message: `Give me a description of the project, long version please:`,
        name: 'descriptLong',
        default: `\x1b[32m[TBD]\x1b[0m`,
    },
    {
        type: 'input',
        message: `Now summarize all that.\n Give me a description of the project, short this time:`,
        name: 'descriptShort',
        default: `\x1b[32m[TBD]\x1b[0m`,
    },
    {
    //README QUESTIONS
        type: 'input',
        message: `Alright, now for...
\x1b[31m=== ReadMe Questions ===\x1b[0m
    Start by telling me how to install this thing:`,
        name: 'installation',
        default: `\x1b[32m[TBD]\x1b[0m`,
    },
];


const HTMLquestions = [
    {
      type: 'input',
      message: `Who is the author?`,
      name: 'author',
      default: 'NONE_PROVIDED',
    },
    {
      type: 'input',
      message: `What is the project's name?`,
      name: 'projName',
      default: 'NONE_PROVIDED',
    },
    {
      type: 'input',
      message: 'Give a description, please:',
      name: 'descript',
      default: 'NONE_PROVIDED',
    },
    {
      type: 'input',
      message: 'What are your best Google keyterms?',
      name: 'keyterms',
      default: 'NONE_PROVIDED',
    },
    {
      type: 'input',
      message: 'The tab icon is named ____.ico?',
      name: 'icon',
      default: 'default',
    },
    {
      type: 'input',
      message: 'Now give a message for the world:',
      name: 'message',
      default: 'Hello World! :)',
    },
    {
      type: 'list',
      name: 'bkgrnd',
      message: 'What color background will it have?',
      choices: ['rgb(15, 30, 25)', 'rgb(215, 230, 225)'],
    },
    {
      type: 'list',
      name: 'fntclr',
      message: 'What color font will it have?',
      choices: ['rgb(245, 245, 230)', 'rgb(5, 3, 2)'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {

    var flag = false;

    console.log(`\x1b[41m B  O  I  L  E  R    M  A  K  E  R \x1b[0m`);

    console.log(`Welcome to \x1b[31mBoilerMaker\x1b[0m.
    We'll get the boilerplate for yer project done in no time!
        Just answer a coupla questions, if ye don't mind... 
 (psst... if you see somethin' that looks like (\x1b[32m[default]\x1b[0m) well that's just
 a recommendation from me. Just smack enter to use it \x1b[4mor\x1b[0m type in your own response.)`);
    
    const inq1 = await inquirer.prompt(READYorNOT).then((response) => {
        if (response.yesorno === 'No') {flag = true;};});
    
    if (flag === true) {console.log(`'Ey no judgement, come back when yer ready...`); return};
    if (flag === false) {console.log(`Alrighty, lets get started with...`)};
    
    const inq2 = await inquirer.prompt(questions);
};


// Function call to initialize app
init();
