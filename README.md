# WebdriverIO-Volvocars
This is a sample project that uses WebdriverIO and JavaScript. It implemented page object pattern and parallel testing.

## Requirements
For Local Run
- node - [how to install Node](https://nodejs.org/en/download/)
- npm - [how to install NPM](https://www.npmjs.com/get-npm)
- install WebdriverIO CLI
```bash
npm i --save-dev @wdio/cli
```
- generate wdio.conf.js
```bash
npx wdio config -y
```

For Docker Run

[Dokcer](https://docs.docker.com/engine/installation/)

## Getting Started
Clone Repository
```bash
1. git clone https://github.com/miccypi/WebdriverIO-Volvo.git 
```
2. Open WebdriverIO-volvocars project in [IntelliJ Idea](https://www.jetbrains.com/idea/)

Install the dependencies:
```bash
npm install
```

Run all tests:
```bash
npm test
```

Generate allure report:
```
npm run report
```


## Implemented Features
	- Mocha framework
    - Page Object Model pattern
	- Parallel execution
	- Allure Report


