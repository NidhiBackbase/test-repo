const{browser } = require("protractor");
var Anchor_Personal_Info= require("../Pages/Anchor_Personal_InfoPage.js");

describe('Anchor Personal Information Functionality',function(){
    beforeEach(function(){
        browser.waitForAngularEnabled(false)
        jasmine.DEFAULT_TIMEOUT_INTERVAL= 60000*2;

    })
    
        it('more than 18 year',function(){
            Anchor_Personal_Info.getUrl();
            Anchor_Personal_Info.enterFirstName();
            Anchor_Personal_Info.enterMiddleName();
            Anchor_Personal_Info.enterLastName();
            Anchor_Personal_Info.enterDate_of_Birth("06/25/1983");
            Anchor_Personal_Info.enterEmail_Address();
            Anchor_Personal_Info.dobValidation("38");
    
  })

     it('less than 18 year',function(){
        Anchor_Personal_Info.getUrl();
        Anchor_Personal_Info.enterFirstName();
        Anchor_Personal_Info.enterMiddleName();
        Anchor_Personal_Info.enterLastName();
        Anchor_Personal_Info.enterDate_of_Birth("06/25/2010");
        Anchor_Personal_Info.enterEmail_Address();
        Anchor_Personal_Info.dobValidation("11");


})
 })