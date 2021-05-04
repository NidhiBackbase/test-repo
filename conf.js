let JasmineReporters= require('jasmine-reporters');
let HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var AllureReporter = require('jasmine-allure-reporter');

let moment = require('moment');
let startTime = moment().format('YYYY.MM.DD hh_mm_ss');

// An example of configuration file.
exports.config = {

  framework: 'jasmine2',
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000,
    isVerbose: true,
    includeStackTrace: true,
    print: function () {
    }
  },

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ["incognito",
        // "auto-open-devtools-for-tabs" , 
        // , "--headless", "--disable-gpu", "--window-size=800,600"
      ]

    }

  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [
 './testcases/Anchor_Personal_InfoPage.spec.js',
 //'./testcases/LandingModal_1Page.spec.js',
 //'./testcases/SingleApp_IDVerificationPage.spec.js'
    
  ],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },


  // run test with mvn clean test
  onPrepare: () => {
    var browserName;
    var browserVersion;
    //We can include these actions in the config file or in the spec
    browser.driver.manage().window().maximize();
    browser.driver.manage().deleteAllCookies();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.getCapabilities().then(function (capabilities) {
      browser.capabilities = capabilities;
      browserName = browser.capabilities.get('browserName').toUpperCase();
      browserVersion = browser.capabilities.get('version');
      console.log(browserName.toString());
      //console.log("after browserName");
      browser.test = new Object();
    });



    jasmine.getEnv().addReporter(new AllureReporter());
    resultsDir: 'allure-results';
    jasmine.getEnv().addReporter(junitReporter);
    jasmine.getEnv().addReporter(//Not mandatory in Jenkins run
      new SpecReporter({
        displayStacktrace: 'all'
      }));
    jasmine.getEnv().addReporter(reporter);
  }
}
var reporter = new HtmlScreenshotReporter({
  dest: 'ScreenShots',
  // filename: 'Demo-Project-Report' + moment().format('YYYY.MM.DD_hh.mm.ss') + '.html',
  showConfiguration: true,
  captureOnlyFailedSpecs: true,
  reportOnlyFailedSpecs: true,
  showSummary: true,
  showSummary: true,
  showColors: true,
  AllureReporter: true,
  showQuickLinks: true,
  reportTitle: "HTML Reports",
  pathBuilder: function (currentSpec, suites, browserCapabilities) {
    //We save the screenshots inside of Reports/$BrowserName/$DateAndTime
    return browserCapabilities.get('browserName').toUpperCase() + '/' + startTime + '/' + currentSpec.fullName;
  }
});
var junitReporter = new JasmineReporters.JUnitXmlReporter({

  savePath: 'reports/junit',
  consolidateAll: false,
  modifySuiteName: function (generatedSuiteName, suite) {
    // this will produce distinct suite names for each capability,
    // e.g. 'firefox.login tests' and 'chrome.login tests'
    return browser.capabilities.get('browserName').toUpperCase() + '.' + generatedSuiteName;
  }
});