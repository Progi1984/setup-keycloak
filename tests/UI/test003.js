const playwright = require('playwright');
const chai = require('chai');
const expect = chai.expect;

describe('Keycloak', function () {
    let browser, page, request;

    before(async function() {
        request = await playwright.request.newContext();
        browser = await playwright.chromium.launch();
        page = await browser.newPage();
    })

    after(async function() {
        browser.close();
    })
    
    it('should return a HTTP code equals to 200', async() => {
        const response = await request.get(`http://localhost:8080/`);
        expect(response.status()).to.eq(200);
    });
    
    it('should click on Administration Console link', async() => {
        await page.goto(`http://localhost:8080/`);
        await page.waitForSelector('.welcome-primary-link a');
        await page.click('.welcome-primary-link a');
    });
    
    it('should login', async() => {
        await page.waitForSelector('.login-pf-header');
        await page.locator('#username').fill('my_admin');
        await page.locator('#password').fill('my_pass');
        await page.click('#kc-login');
    });
    
    it('should check if you are logged in', async() => {
        await page.waitForSelector('#kc-main-content-page-container .pf-c-tab-content .pf-c-description-list__description:nth-of-type(1) .pf-c-description-list__text', {
            timeout: 30000
        });
    });
});
