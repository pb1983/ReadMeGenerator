import inquirer from "inquirer";
import fs from "fs/promises";


let {title, description, tableofcontents, } = await inquirer   
    .prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'Please create a title for your ReadMe'

        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description'

        },
        {
            type: 'input',
            name: 'tableOfContents',
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
            type: 'input',
            name: 'license',
            message: 'Please select a license',
            choices: '',

            filter(val) {
               return val.toLowerCase();
            },
        },
        {
            type: 'input',
            name: 'contributing',
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



    let readMeText = ` # Project Description
    ${description}

    ## A second-level heading

    ${generateLicense(size)}

    ### A third-level heading 
    
    `

    fs.writeFile("ReadMe.md", readMeText)

    function generateLicense(license) {

        if (license === ) {
            return //add url for license
        }

        return ''

    }