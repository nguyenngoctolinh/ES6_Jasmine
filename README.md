# ES6 – Jasmine Framework
## Preparation
- Language: ES6
- Framework: Jasmine
- Tool: Visual Studio Code
- Web driver: WebdriverIO
- Plugin: Gulp, Log4js
- Services: Selenium Standalone

# How to build project – Jasmine framework 
1. Install NodeJS: 
http://blog.teamtreehouse.com/install-node-js-npm-windows
2. Create a new folder 
3. Open Command prompt from this folder: 
```
npm init

```
4. Install WebdriverIO: 
```
npm install webdriverio

```
5. Install Selenium Standalone Service:
```
npm install selenium-standalone –-save-dev

```
6. Use WebdriverIO config:
```
Wdio or wdio config

```
Select:
- On my local machine
- Jasmine
- Shall I install the framework adapter for you? (Y/n): Y
- Where are your test specs located? (./test/specs/**/*.js): './src/*.js'
- Press ‘Enter’ to skip this option
- Press ‘Space bar’to select ‘Selenium-standalone-https …’ --> Press ‘Enter’
- Shall I install the services for you? (Y/n): Y
- Result
- Press ‘Enter’ 
- What is the base url? (http://localhost): https://www.facebook.com
- Press ‘Enter’
7. Install Gulp plugin and Gulp - Webdriver to run selenium tests with the WebdriverIO testrunner.

```
npm install gulp –-save-dev

```
```
npm install gulp-webdriver –-save-dev 

```
8. Install log4js to create a .log file

```
npm install log4js –-save

```
9. Install Babel to compile from ES6 to Javascript
```
npm install babel-cli –-save-dev

```
```
npm install babel-preset-es2015 –-save-dev

```
Config Babel

```
require('babel-register')({
  
});

```
# How to run project

```
npm install or npm i

```

```
gulp

```
