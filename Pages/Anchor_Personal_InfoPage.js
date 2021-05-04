const { element, browser } = require("protractor")
const { elementTextContains } = require("selenium-webdriver/lib/until")


var FirstName = element(by.id("bb_input_0"));
var MiddleName = element(by.id("bb_input_1"));
var LastName = element(by.id("bb_input_2"));
var Date_Of_Birth = element(by.xpath('//div//input[@id="bb_input_3"]'))
var Email_Address = element(by.xpath('//input[@id="bb_input_4"]'))
var Continue = element(by.xpath('//button//span[@class="bb-load-button__content"]'))
var error_Message = element(by.xpath('//small[@role="alert"]'))

var Personal_Info = function () {

    this.getUrl = function () {
        browser.get("https://app.tst.cnb.live.backbaseservices.com/onboarding-us#/anchor-data")
    }
    this.enterFirstName = function () {
        FirstName.clear();
        FirstName.sendKeys("John");
        browser.sleep(5000);

    }
    this.enterMiddleName = function () {
        MiddleName.clear();
        MiddleName.sendKeys("John");
        browser.sleep(5000);
    }

    this.enterLastName = function () {
        LastName.clear()
        LastName.sendKeys("Paul");
        browser.sleep(5000);
    }
    this.enterDate_of_Birth = function (dob) {
        Date_Of_Birth.sendKeys(dob)
        browser.sleep(3000)
    }
    this.dobValidation = function (age) {
        browser.sleep(3000)
        if (age < 18) {
            error_Message.getText().then(function (text) {
                expect(text).toEqual("Under 18 years old, you're not eligible to open an account")
            })
        }
        else if (age >= 18) {
            console.log("age is greater than 18")

        }
        else
            console.log("No valid")
    }
    this.enterEmail_Address = function () {
        Email_Address.click();
        browser.sleep(2000)
        var Email = Math.random().toString(36).substr(2, 5);
        Email_Address.sendKeys(Email + "@gmail.com")
    }

    this.ClickContinue = function () {
        Continue.click();
        browser.sleep(2000)
    }


};


module.exports = new Personal_Info();