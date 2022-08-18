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

module.exports = { READYorNOT, questions };