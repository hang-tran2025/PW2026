import {test, expect} from '@playwright/test';

/* Open browser

Navigate to https://the-internet.herokuapp.com/status_codes

Click on "200"

Then "200 status code" page appear

Click on "go here"

Click on "301" */

/* Then "301 status code" page appear

Click on "go here"

Click on "404"

Then "404 status code" page appear

Click on "go here"

Click on "500"

Then "500 status code" page appear

Click on "go here"

 */
test('verify link success', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/status_codes', {waitUntil: 'domcontentloaded'});
    await page.getByRole('link', {name: '200'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/200');
    await page.getByRole('link', {name: 'here'}).click();
    await page.getByRole('link', {name: '301'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/301');
    await page.getByRole('link', {name: 'here'}).click();
    await page.getByRole('link', {name: '404'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/404');
    await page.getByRole('link', {name: 'here'}).click();
    await page.getByRole('link', {name: '500'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/status_codes/500');
    await page.getByRole('link', {name: 'here'}).click();
})