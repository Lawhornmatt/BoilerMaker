// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: `We are making a website for your project!\nWho is the author?`,
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
function init() {inquirer.prompt(questions)}

// Function call to initialize app
init();
