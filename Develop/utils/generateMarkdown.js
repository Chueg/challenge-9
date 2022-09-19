// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let smimbo;
  if(smimbo === 'none')
  {
    return '';
  }
  switch(license){
    case 'MIT':
       smimbo =`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  `;
     break;
    case 'GPLv2':
       smimbo =`[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) `;
     break;
    case 'Apache':
       smimbo = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) `;
     break;
    case 'BSD3-clause':
       smimbo = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
     break;
    case 'BSD 2-clause':
       smimbo = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
     break;
    case 'LGPLv3':
       smimbo = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) `;
     break;
    case 'AGPLv3':
       smimbo = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
     break;
  }
  return smimbo;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license ==='none')
  {
    return '';
  }
  
  return '[License](#license)';
  

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let jimbo;
  if (license === 'none')
  {
    return '';
  }
  switch(license){
    case 'MIT':
       jimbo =`(https://opensource.org/licenses/MIT)  `;
     break;
    case 'GPLv2':
       jimbo =`(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) `;
     break;
    case 'Apache':
       jimbo = `(https://opensource.org/licenses/Apache-2.0) `;
     break;
    case 'BSD3-clause':
       jimbo = `(https://opensource.org/licenses/BSD-3-Clause)`;
     break;
    case 'BSD 2-clause':
       jimbo = `(https://opensource.org/licenses/BSD-2-Clause)`;
     break;
    case 'LGPLv3':
       jimbo = `(https://www.gnu.org/licenses/lgpl-3.0) `;
     break;
    case 'AGPLv3':
       jimbo = `(https://www.gnu.org/licenses/agpl-3.0)`;
     break;
  }
  return jimbo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

\n## Description\n
${data.motivation}\n
## Table of Contents\n
* [Installation](#installation)\n
* [Usage](#usage)\n
* ${renderLicenseLink(data.license)}\n
* [Contributing](#contributing)\n
* [Tests](#tests)\n
* [Questions](#questions)
## Installation\n\n
${data.installation}

## Usage\n\n
${data.usage}\n
## License\n\n
${renderLicenseSection(data.license)}${renderLicenseBadge(data.license)}
## Contributing\n\n
## Tests\n
${data.tests}

## Questions\n\n

For any questions you may have you can reach me at:\n
    Github: https://github.com/${data.username}\n
    Email:  ${data.email}


`;
}

module.exports = generateMarkdown;
