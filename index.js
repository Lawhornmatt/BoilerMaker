import inquirer from 'inquirer';
import fs from 'fs';

import { mkdir } from 'node:fs';

import pkg1 from './utils/sanitize.cjs';
const sanitize = pkg1;

import pkg3 from './utils/genMD.cjs';
const genMD = pkg3;

import pkg4 from './utils/genHTML.cjs';
const genHTML = pkg4;

import pkg5 from './utils/genCSS.cjs';
const { genRESET, genSTYLE } = pkg5;

import pkg7 from './utils/genJS.cjs';
const genJS = pkg7;

// This could be acheived with a 'when' but I like this readability better
// Also could use type: confirm but I think list still has better UX
const READYorNOT = [
    {
        type: 'list',
        name: 'yesorno',
        message: 'You cool with all that?\n Are you ready to begin?',
        choices: ['Yes', 'No'],
    },
];

const questions = [
    // GENERAL QUESTIONS ABOUT PROJECT
    {
        type: 'input',
        message: `\x1b[31m=== General Questions ===\x1b[0m
    Who is creating this project?`,
        name: 'author',
        default: `\x1b[32mMatty L\x1b[0m`,
    },
    {
        type: 'input',
        message: `What is the name of the project?`,
        name: 'projName',
        default: `\x1b[32mTBD\x1b[0m`,
    },
    {
        type: 'input',
        message: `Give me a description of the project. Think about:
    the why, the motivation, the problem it solves, etc...`,
        name: 'descriptLong',
        default: `\x1b[32mIt is very complicated, lemme tell ya...\x1b[0m`,
    },
    {
        type: 'input',
        message: `Now summarize all that.\n Give me a description of the project, short this time:`,
        name: 'descriptShort',
        default: `\x1b[32mStuff happens\x1b[0m`,
    },
    {
    // README QUESTIONS
        type: 'input',
        message: `Alright, now for...
\x1b[31m=== ReadMe Questions ===\x1b[0m
    Start by telling me how to install this thing:`,
        name: 'installation',
        default: `\x1b[32mHeck if I know\x1b[0m`,
    },
    {
        type: 'input',
        message: `How does one use this app?`,
        name: 'useage',
        default: `\x1b[32mClick wildly\x1b[0m`,
    },
    {
        type: 'list',
        message: `Choose a license for this app:`,
        name: 'license',
        choices: ['MIT', 'GNU GPL v3', 'Apache'],
    },
    {
        type: 'input',
        message: `Who contributed to the making of this app?`,
        name: 'contrib',
        default: `\x1b[32mIt was made from scratch\x1b[0m`,
    },
    {
        type: 'input',
        message: `I don't know what they are expecting here`,
        name: 'tests',
        default: `\x1b[32mWhat "Tests"\x1b[0m`,
    },
    {
        type: 'input',
        message: `Or here. What the heck are "questions" refering to`,
        name: 'questions',
        default: `\x1b[32mHuh?\x1b[0m`,
    },
    {
    // HTML QUESTIONS
        type: 'input',
        message: `Alright, just a coupla...
\x1b[31m=== HTML Questions ===\x1b[0m
    What are your best Google keyterms?`,
        name: 'keyterms',
        default: `\x1b[32mNone\x1b[0m`,
    },
    {
        type: 'input',
        message: 'Now give a message for the world:',
        name: 'message',
        default: 'Hello World! :)',
    },
    {
    // CSS QUESTIONS
        type: 'list',
        message: `Alright, next up...
\x1b[31m=== CSS Options ===\x1b[0m
    What kinda theme you picturin' for this thing?`,
        name: 'theme',
        choices: ['Dark', 'Light', 'Forest'],
    },

    
];

function writeFileTree(data) {
    
    mkdir(`./${data.projName}/assets/images`, { recursive: true }, (err) => {
        if (err) throw err;
    });

    mkdir(`./${data.projName}/assets/css`, { recursive: true }, (err) => {
        if (err) throw err;
    });

    mkdir(`./${data.projName}/libs`, { recursive: true }, (err) => {
        if (err) throw err;
    });
};

function writeFiles(FileName, data, flag) {

    if (flag === 1) {
        fs.writeFile(`./${FileName.projName}/README.md`, data, (err) => err ? console.error(err) : console.log('Yeehaw~~~'));
    };

    if (flag === 2) {
        fs.writeFile(`./${FileName.projName}/index.html`, data, (err) => err ? console.error(err) : console.log('Yeehaw~~~'));
    };

    if (flag === 3) {
        fs.writeFile(`./${FileName.projName}/assets/css/reset.css`, data, (err) => err ? console.error(err) : console.log('Yeehaw~~~'));
    };

    if (flag === 4) {
        fs.writeFile(`./${FileName.projName}/assets/css/style.css`, data, (err) => err ? console.error(err) : console.log('Yeehaw~~~'));
    };

    if (flag === 5) {
        fs.writeFile(`./${FileName.projName}/libs/main.js`, data, (err) => err ? console.error(err) : console.log('Yeehaw~~~'));
    };
};


// Initializes app
async function init() {

    var flag = false;

    console.log(`\x1b[41m B  O  I  L  E  R    M  A  K  E  R \x1b[0m`);

    console.log(`Welcome to \x1b[31mBoilerMaker\x1b[0m.
    We'll get the boilerplate for yer project done in no time!
        Just answer a coupla questions, if ye don't mind... 
 (psst... if you see somethin' that looks like (\x1b[32mdefault\x1b[0m) well that's just
 a recommendation from me. Just smack enter to use it \x1b[4mor\x1b[0m type in your own response.)`);
    
    const step1 = await inquirer.prompt(READYorNOT)
        .then((response) => {if (response.yesorno === 'No') {flag = true;};});
    
    if (flag === true) {console.log(`Hey no judgement, come back when yer ready...`); return};
    if (flag === false) {console.log(`Alrighty, lets get started with...`)};
    
    const step2 = await inquirer.prompt(questions);

    //console.log(inq2); // See what inputs the user gave in a JSON object
    
    const step3 = sanitize(step2);

    //console.log(step3); // See the inputs post-sanitization

    writeFileTree(step3);

    const dataMD = genMD(step3); 

    //console.log(dataMD); // See the sani'd data turned into a ReadMe

    const dataHTML = genHTML(step3); 
    const dataRESET = genRESET(step3); 
    const dataSTYLE = genSTYLE(step3); 
    const dataJS = genJS(step3); 


    writeFiles(step3, dataMD, 1);
    writeFiles(step3, dataHTML, 2);
    writeFiles(step3, dataRESET, 3);
    writeFiles(step3, dataSTYLE, 4);
    writeFiles(step3, dataJS, 5);

};


// Call to initialize app
init();

