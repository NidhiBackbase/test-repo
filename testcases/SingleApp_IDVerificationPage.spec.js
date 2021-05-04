var IDAndVerification= require('../Pages/SingleApp_IDVerificationPage');
describe('Single Applicant ID and Verification Functionality',function(){
    beforeEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL= 60000*2;

    })
    it('Click on Start Verification Link',function(){
        IDAndVerification.SingleAppIdAndVerification();
    } )
})