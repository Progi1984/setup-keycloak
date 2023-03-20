const playwright = require('playwright');
const chai = require('chai');
const expect = chai.expect;

describe('Keycloak', function () {
    let request;

    beforeEach(async function() {
        request = await playwright.request.newContext();
    })

    afterEach(async function() {})
    
    it('should return a HTTP code equals to 200', async function () {
        const response = await request.get(`http://localhost:8080/`);
        expect(response.status()).to.eq(200);
    });
});
