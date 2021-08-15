const page = require('./page');

class NavMenuPage {

    //Locators
    get btnFirstMenuOption() { return $('button[id="site-nav-cars-menu-section-tab-0"]').$('h2') }

    //Action Methods
    getFirstMenuOption(){
        return page.doGetText(this.btnFirstMenuOption);
    }


}
module.exports=new NavMenuPage();