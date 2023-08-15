import inquirer from "inquirer";
import fs from "fs/promises";


let { title, description, table_of_contents, installation, usage, license, contributions, tests, questions } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please create a title for your ReadMe'

        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project'

        },
        {
            type: 'input',
            name: 'table_of_contents',
            message: 'Please create a table of contents'

        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions'

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please descript the intended usage for this project'

        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license',
            choices: ['Apache', 'MIT', 'Zlib'],
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please list all contributors'

        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please explain how to run any necessary tests to confirm that the application is working'

        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please add any frequently asked questions that may be asked about this project'

        },

    ])


let readMeText =

  `    
# Project Title
${title}

## Description
${description}

## Table of contents
${table_of_contents}
    
## Installation
${installation}

## Usage
${usage}

## Contributors
${contributions}

## Licenses
${generateLicense(license)}

## Tests
${tests}

## Questions
${questions}
 
 `

fs.writeFile("ReadMe.md", readMeText)

function generateLicense(license) {
    
    if (license === 'Apache') {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === 'MIT') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === 'Zlib') {
        return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
    }

}

