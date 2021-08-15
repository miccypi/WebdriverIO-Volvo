const safePage=require('../main/page/safe.page')
const navMenuPage=require('../main/page/navMenu.page')
const constants=require('../main/constants/FrameworkContants')
const configData = require("../main/config/configdata");
const assert =require('chai').assert;

describe('safePage Test -->', function(){

    it('Open and click Accept button to accept cookie of the website', function() {
        browser.url('/intl/v/car-safety/a-million-more');
        // browser.maximizeWindow();
        safePage.clickAcceptCookie();
    })

    it('Verify safe page title is displayed as expected', function(){
        assert.equal(safePage.getSafePageTitle(), constants.SAFE_PAGE_HEAD_TITLE,'Safe Page title did not match');
    });

    it('Verify safe page navigation menu', function() {
        assert.equal(safePage.isSafeNavMenuDisplayed(), true, 'Safe page navigation menu is not displayed');
    })

    it('Click navigation menu', function() {
        safePage.clickNavMenu();
    })

    it('Verify menu option in Buy', function() {
        console.log(navMenuPage.getFirstMenuOption())
        console.log(configData.firtMenuOptionInNavMenu)
        assert.equal(navMenuPage.getFirstMenuOption(), configData.firtMenuOptionInNavMenu, 'Expected first option in navigation menu is not displayed');
    })



});