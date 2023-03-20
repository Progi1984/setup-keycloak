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
    
    it('should return a HTTP code equals to 200', async function () {
        const response = await request.get(`http://localhost:8080/`);
        expect(response.status()).to.eq(200);
    });
    
    it('should click on Administration Console link', async function () {
        await page.goto(`http://localhost:8080/`);
        await page.waitForSelector('.welcome-primary-link a');
        await page.click('.welcome-primary-link a');
    });
    
    it('should login', async function () {
        await page.waitForSelector('.login-pf-header');
        await page.locator('#username').fill('admin');
        await page.locator('#password').fill('admin');
        await page.click('#kc-login');
    });
    
    it('should check if you are logged in', async function () {
        const selVersion = '#kc-main-content-page-container .pf-c-tab-content .pf-l-grid__item:nth-child(1) .pf-c-description-list__group:nth-child(1) .pf-c-description-list__description:nth-of-type(1) .pf-c-description-list__text';

        await page.waitForSelector(selVersion, {
            timeout: 30000
        });

        const data = await page.locator(selVersion).innerHTML();
        expect(data).to.eq('19.0.3');
    });
});
