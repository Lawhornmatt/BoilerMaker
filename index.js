import inquirer from 'inquirer';
import fs from 'fs';

// import { mkdirSync } from 'node:fs';

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
const { READYorNOT, questions } = pkg8;


function writeFileTree(data) {
    
    fs.mkdirSync(`./${data.projName}/assets/images`, { recursive: true }, (err) => {
        if (err) throw err;
    });

    fs.mkdirSync(`./${data.projName}/assets/css`, { recursive: true }, (err) => {
        if (err) throw err;
    });

    fs.mkdirSync(`./${data.projName}/libs`, { recursive: true }, (err) => {
        if (err) throw err;
    });
};

function writeFiles(FileName, data, flag) {

    if (flag === 1) {
        fs.writeFile(`./${FileName.projName}/README.md`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };

    if (flag === 2) {
        fs.writeFile(`./${FileName.projName}/index.html`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };

    if (flag === 3) {
        fs.writeFile(`./${FileName.projName}/assets/css/reset.css`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };

    if (flag === 4) {
        fs.writeFile(`./${FileName.projName}/assets/css/style.css`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
    };

    if (flag === 5) {
        fs.writeFile(`./${FileName.projName}/libs/main.js`, data, (err) => err ? console.error(err) : console.log(`\x1b[31m@===\x1b[0m`));
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

    console.log(`Alright, all done, good luck on the project now.
    Just copy paste it outta here and \x1b[31mget to werk\x1b[0m.`);

    console.log(`\x1b[41m B  O  I  L  E  R    M  A  K  E  R \x1b[0m`);

    console.log(`\x1b[4mMatthew Lawhorn == 2022 == MIT License\x1b[0m`);

};


// Call to initialize app
init();

