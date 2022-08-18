// ====================
//  IMPORTS (3rd Party)
// ====================

import inquirer from 'inquirer';
import fs from 'fs'; // import { mkdirSync } from 'node:fs';

// ====================
//  IMPORTS (My Scripts)
// ====================

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

import pkg8 from "./utils/inquirer/questions.cjs";
const { READYorNOT, questions, intro, outro, nothanks, goahead } = pkg8;

// ====================
//      FUNCTIONS
// ====================

// WRITE-FILE-TREE
// Creates the file structure necessary for creating the files
// Uses synchronous version of mkdir so that file tree is made BEFORE files try to be written
function writeFileTree(data) {
    
    fs.mkdirSync(`./${data.filename}/assets/images`, { recursive: true }, (err) => {
        if (err) throw err;
    });

    fs.mkdirSync(`./${data.filename}/assets/css`, { recursive: true }, (err) => {
        if (err) throw err;
    });

    fs.mkdirSync(`./${data.filename}/libs`, { recursive: true }, (err) => {
        if (err) throw err;
    });
};

// COPY-ICON
// Copies the default.ico into the filetree
function copyIcon(data){
    fs.copyFileSync(`./default.ico`,`./${data.filename}/assets/images/default.ico`);
};

// WRITE-FILES
// Creates the files of the project and saves them in the file tree
function writeFiles(FileName, data, flag) {

    if (flag === 1) {
        fs.writeFile(`./${FileName.filename}/README.md`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };

    if (flag === 2) {
        fs.writeFile(`./${FileName.filename}/index.html`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };

    if (flag === 3) {
        fs.writeFile(`./${FileName.filename}/assets/css/reset.css`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };

    if (flag === 4) {
        fs.writeFile(`./${FileName.filename}/assets/css/style.css`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };

    if (flag === 5) {
        fs.writeFile(`./${FileName.filename}/libs/main.js`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };
};

// INITIALIZE
// An asynchronous function that begins and ends the program
async function init() {

    console.log(intro); //NECESSARY
    
    var flag = false; // == All of step1 is just to kill the program if the user selects 'No' ==

    const step1 = await inquirer.prompt(READYorNOT)
        .then((response) => {if (response.yesorno === 'No') { flag = true;
        };
    });
    
    if (flag === true) {console.log(nothanks); return};
    if (flag === false) {console.log(goahead)};
    
    const step2 = await inquirer.prompt(questions);

    //console.log(inq2); // DEBUG:See what inputs the user gave in a JSON object
    
    const step3 = sanitize(step2);

    //console.log(step3); // DEBUG:See the inputs post-sanitization

    writeFileTree(step3);

    copyIcon(step3);

    const dataMD = genMD(step3); 
    const dataHTML = genHTML(step3); 
    const dataRESET = genRESET(step3); 
    const dataSTYLE = genSTYLE(step3); 
    const dataJS = genJS(step3); 
    
    //console.log(dataMD); // DEBUG:See the sani'd data turned into a ReadMe

    writeFiles(step3, dataMD, 1);
    writeFiles(step3, dataHTML, 2);
    writeFiles(step3, dataRESET, 3);
    writeFiles(step3, dataSTYLE, 4);
    writeFiles(step3, dataJS, 5);

    console.log(outro); //NECESSARY

};


// Call to initialize app
init();

