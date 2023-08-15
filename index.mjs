import inquirer from "inquirer";
import fs from "fs/promises";


let { title, description, installation, usage, license, contributions, tests, git_name, email,} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please create a title for your project'

        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project'

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
            name: 'git_name',
            message: 'Please provide your Github username'

        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your e-mail address'

        },

    ])


let readMeText =

`    
${generateLicense(license)}

# ${title}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Insallation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Lincenses](#licenses)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
${installation}

## Usage
${usage}

## Contributors
${contributions}

## Licenses
This project is covered under the ${license} license.

## Tests
${tests}

## Questions
Please visit my repository:\n
${gitProfile(git_name)}\n
You can also e-mail me directly if you would have any questions:\n
${emailInput(email)}

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

function gitProfile(git_name) {
    return `[Github Repo](https://github.com/${git_name})`
}

function emailInput(email) {
    return `[E-mail](mailto:${email})`
}



