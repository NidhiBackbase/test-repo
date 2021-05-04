const { element, browser } = require("protractor")


var Landing_Modal1 = function () {
    var Important_infoPage = element(by.xpath('//p[contains(text(),"federal law requires")]'));
    var Next = element(by.xpath('//button[contains(text()," Next ")]'))

    this.Landing_Modal1_Page = function () {
        browser.get("https://app.tst.cnb.live.backbaseservices.com/onboarding-us");

        Important_infoPage.getText().then(function (text) {
            console.log(text);
            expect(text).toContain('federal law requires');

        });

        browser.sleep(4000);

        Next.click();
        browser.sleep(5000);
        browser.executeScript("arguments[0].setAttribute('style',arguments[1]);", Next, "color: Blue; border: 2px solid red;")
        browser.sleep(2000)

    }

}
module.exports = new Landing_Modal1();