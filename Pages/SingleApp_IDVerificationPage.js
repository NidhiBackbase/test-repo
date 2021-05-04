const { element, browser } = require("protractor")


var Id_Verification = function () {
    var startverification= element(by.xpath('//button[contains(text(),"Start verification")]'))

    this.SingleAppIdAndVerification = function () {
        browser.get("https://app.dev.cnb.live.backbaseservices.com/onboarding-us#/identity-verification");
        startverification.click();
        browser.sleep(5000);
    }
}
    module.exports=new Id_Verification();
    