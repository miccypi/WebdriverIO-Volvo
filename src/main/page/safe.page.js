const constants=require('../constants/FrameworkContants');
const page = require('./page');

class SafePage {

    //Locators
    get btnAccept() { return $('button[title="Accept"]') }
    get safePageNavMenu() { return $('button[id="nav:topNavCarMenu"]') }
    get btnSiteMenu() { return $('button[data-autoid="nav:siteNavHamburgerIcon"]')}
    get btnBuy() {return $('div[data-autoid="nav:sideNavLinksMenu"]').$$('button')[0]}
    get menuOptionInBuy() {return $('a[linktype="internal"]').$('em')}


    //Action Methods
    getSafePageTitle() {
        return page.doGetPageTitle(constants.SAFE_PAGE_HEAD_TITLE);
    }

    isSafeNavMenuDisplayed() {
        return page.doIsDisplayed(this.safePageNavMenu);
    }

    clickAcceptCookie(){
        page.doClick(this.btnAccept);
    }

    clickSiteMenu(){
        page.doClick(this.btnSiteMenu);
    }

    clickBtnBuy(){
        page.doClick(this.btnBuy);
    }

    getMenuOptionInBuy() {
        return page.doGetText(this.menuOptionInBuy);
    }

    clickNavMenu(){
        page.doClick(this.safePageNavMenu);
    }



}
module.exports=new SafePage();