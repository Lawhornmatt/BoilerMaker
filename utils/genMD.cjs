// Function that returns a license BADGE
function renderLicenseBadge(license) {
  
  if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  
  if (license == 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  
  if (license == 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
};

// Function that returns the license LINK
function renderLicenseLink(license) {

  if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  
  if (license == 'GNU') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  
  if (license == 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
};

// Function that returns the license SECTION
function renderLicenseSection(data, license) {

  if (license == 'MIT') {
    return `Copyright ${data.year} ${data.author}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  
  if (license == 'GNU') {
    return `    Copyright (C) ${data.year}  ${data.author}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  }
  
  if (license == 'Apache') {
    return `   Copyright ${data.year} ${data.author}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  }
};

// Formats the contributions section
function formatContribs(data) {

    if (data.contrib != `This is a solo-project.`) {
      return `This project was made through the contributions of:

      ${data.contrib}`
    } else {
      return data.contrib;
    };
};

// TODO: Create a function to generate markdown for README
function genMD(data) {

  let licenseInfo = data.license;

  const badge = renderLicenseBadge(licenseInfo);

  const link = renderLicenseLink(licenseInfo);
  
  const sectionTxt = renderLicenseSection(data, licenseInfo);

  const contribSect = formatContribs(data);


  return `# ${data.projName}
  ${badge}

## TABLE OF CONTENTS:

* [Description](#description)

* [Installation guide](#installation) 

* [Usage Info](#usage) 

* [Contribution Guidelines](#contribution) 

* [Testing Instructions](#testing) 

* [Questions](#questions)

* [Credits](#credit)

* [License](#license)


## DESCRIPTION:

This is the ReadMe for ${data.author}'s project titled: ${data.projName}

${data.descriptLong}

<img src='INSERT PATH TO SCREENSHOT HERE' alt='A screenshot of ${data.projName}'/>

## INSTALLATION:

${data.installation}

## USAGE:

${data.useage}

## CONTRIBUTION:

${data.cont_guidelines}

## TESTING:

${data.tests}

## QUESTIONS:

If you have any questions,

you can find my GitHub here: ${data.github}

or email me here: ${data.auth_email}

## CREDIT:

This project was made in ${data.year} by ${data.author}

${contribSect}

## LICENSE:

This program is copyrighted under the ${licenseInfo} open source license.

${sectionTxt}

[Further license information can be found here.](${link})

`;
};

module.exports = genMD;
