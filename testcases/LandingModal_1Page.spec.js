var Landing_Modal1= require("../Pages/LandingModal_1Page.js")

describe('Landing Modal_1 Functionality',function(){
    beforeEach(function(){
        browser.waitForAngularEnabled(false)
        jasmine.DEFAULT_TIMEOUT_INTERVAL=60000*2;

    })
    it(' Landing Modal_1 ', function(){
Landing_Modal1.Landing_Modal1_Page();
    })
});

