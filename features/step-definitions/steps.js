const { Given, When, Then } = require('@wdio/cucumber-framework');
//const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


When(`I capture the title of the web application`, async () => {
    const title = await browser.getTitle();
    // console.log(`Captured title----------------------------------------------------------: ${title}`);
});

Then(`I print the title of the web application`, async () => {
    const title = await browser.getTitle();
     console.log(`Captured title: ${title}`);
     expect(title).toBe("Home | TP ICAP");
});

Then(`I close the web application`, async () => {
    await browser.closeWindow();
});















When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

