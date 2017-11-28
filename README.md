Welcome to Exosphere
==================================================

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


This sample code helps get you started with a simple Node.js web application
deployed by AWS Elastic Beanstalk.

What's Here
-----------

This sample includes:

* README.md - this file
* .ebextensions/ - this directory contains the configuration files that
  AWS Elastic Beanstalk will deploy your Express application
* package.json - this file contains various metadata relevant to your Node.js
  application such as dependencies
* app.js - this file contains the code for your application
* app/ - this directory contains static web assets used by your application


Getting Started
---------------

These directions assume you want to develop on your local computer, and not
from the Amazon EC2 instance itself. If you're on the Amazon EC2 instance, the
virtual environment is already set up for you, and you can start working on the
code.

To work on the sample code, you'll need to clone your project's repository to your
local computer. If you haven't, do that first. You can find instructions in the
AWS CodeStar user guide.

1. Install Node.js on your computer.  For details on available installers visit
   https://nodejs.org/en/download/.

2. Install NPM dependencies:

        $ npm install

3. Start the development server:

        $ grunt serve

4. Open the endpoint to view your application.

What Do I Do Next?
------------------

Learn more about AWS CodeStar by reading the user guide. 

User Guide: http://docs.aws.amazon.com/codestar/latest/userguide/welcome.html

Forum: https://forums.aws.amazon.com/forum.jspa?forumID=248
