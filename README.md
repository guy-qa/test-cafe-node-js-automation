# test-cafe-node-js
This is a ui automation framework using test cafe


Requirements: This project requires the following packages to run 1. TestCafe 2. Visual Studio Code

Install Visual Studio Code community version and then open the terminal and install testcafe

$ npm install -g testcafe $ npm install testcafe-reporter-html

Add the following arguments in launch.json:

"args": [ "chrome", "${relativeFile}", "--reporter", "html:reports/TestReport_date +%d-%b-%Y_%I:%M%p.html" ]

<Note*: You can add more launch options as desired.>

Folder Structure: 1. Page Objects This folder contains the Page Object Repositories

    1.1. "Locators" folder contains selectors/locators for each of the pages
    1.2. "PageObjectLogic" folder contains the logical methods/functions for each of the pages 

2. config.js
    This file contains configurations for different test environments, their URLs and credential information.

3. tests
    This folder contains test cases.

4. test_data.json
    This file contains test data to use for running the tests.
