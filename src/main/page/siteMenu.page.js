const page = require('./page');

class SiteMenuPage {

    //Locators
    get btnBuy() {return $('div[data-autoid="nav:sideNavLinksMenu"]').$$('button')[0]}
    get menuOptionInBuy() {return $('a[linktype="internal"]').$('em')}


    //Action Methods
    clickBtnBuy(){
        page.doClick(this.btnBuy);
    }

    getMenuOptionInBuy() {
        return page.doGetText(this.menuOptionInBuy);
    }


}
module.exports=new SiteMenuPage();