//config runner
exports.config = {
    runner: 'local',
    specs: [
        './src/test/**/*.test.js'
    ],
    exclude: [

    ],
    maxInstances: 2,
    // capabilities: [
	// 	{
	// 		maxInstances: 1,
	// 		browserName: 'chrome',
	// 	},
	// 	{
	// 		maxInstances: 1,
	// 		browserName: 'firefox',
	// 	}
	// ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.volvocars.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
	reporters: ['spec',['allure', {outputDir: 'allure-results'}]], 
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    //hooks
    beforeTest: function() {
        const chai = require('chai');
        const chaiWebdriver =  require('chai-webdriverio').default
        chai.use(chaiWebdriver(browser))

        global.assert = chai.assert
        global.expect = chai.expect
        global.should = chai.should
    },

    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },

}
