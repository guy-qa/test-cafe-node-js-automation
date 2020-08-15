# js-automation-tools

A collection of scripts for javascript test automation

[![Build Status](https://travis-ci.org/Marketionist/js-automation-tools.svg?branch=master)](https://travis-ci.org/Marketionist/js-automation-tools)
[![npm version](https://img.shields.io/npm/v/js-automation-tools.svg)](https://www.npmjs.com/package/js-automation-tools)
[![NPM License](https://img.shields.io/npm/l/js-automation-tools.svg)](https://github.com/Marketionist/js-automation-tools/blob/master/LICENSE)

## Supported versions
Node.js: 8.x, 9.x, 10.x, 11.x, 12.x, 13.x, 14.x

## Table of contents
* [Installation](#installation)
* [Generate timestamp or random digits](#generate-timestamp-or-random-digits)
* [Send GET, POST and other requests](#send-get-post-and-other-requests)
* [Read directories and get files](#read-directories-and-get-files)
* [Contributing](#contributing)
* [Thanks](#thanks)

## Installation
To install js-automation-tools and save it to your `package.json` just run:
```
npm install js-automation-tools --save-dev
```

## Generate timestamp or random digits
There ususally is a need to generate random names. Timestamp can be used to
generate a unique string of 13+ digits:
```
const { stamp } = require('js-automation-tools');

const randomDigits = stamp.getTimestamp(); // '1588556993141'
const newTestName = `My new test ${randomDigits}`; // 'My new test 1588556993141'
```
It will also write generated digits to a global environment variable
`process.env.TIMESTAMP` that can be easily accessed in any place of your tests:
```
console.log(process.env.TIMESTAMP); // '1588556993141'
```
To get new timestamp:
```
const newRandomDigits = stamp.resetTimestamp(); // '1588558255810'

console.log(process.env.TIMESTAMP); // '1588558255810'
```

## Send GET, POST and other requests
Send request to any URL and get response. Function should be called with
arguments: method, request URL, headers, body (or just empty strings '' if any
argument is not required in your request):
```
const { createRequest } = require('js-automation-tools');

const responseGet = await createRequest(
    'GET',
    'https://www.google.com/',
    '',
    ''
);

const responsePost = await createRequest(
    'POST',
    'http://httpbin.org/post',
    '{ "Content-Type": "application/json", "Authorization": "Bearer aBcD1234" }',
    '{ "test1": 1, "test2": 2 }'
);
```

## Read directories and get files
Read the array of directories and get the array of files from this directories:
```
const { readDirectories } = require('js-automation-tools');

const pathToDirectory1 = path.join(__dirname, '/directory1');
const pathToDirectory2 = path.join(__dirname, '../..', '/directory2');

const allFiles = await readDirectories([pathToDirectory1, pathToDirectory2]);
```

## Contributing
You are welcome to contribute to this repository - please see
[CONTRIBUTING.md](https://github.com/Marketionist/js-automation-tools/blob/master/CONTRIBUTING.md)
to help you get started. It is not mandatory, so you can just create a pull
request and we will help you refine it along the way.

## Thanks
If this package was helpful to you, please give it a **★ Star** on
[Github](https://github.com/Marketionist/js-automation-tools).
