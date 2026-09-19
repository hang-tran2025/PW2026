import {test, expect} from '@playwright/test';

test('login success with valid credentials', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login', {waitUntil: 'domcontentloaded'});
    await page.getByRole('textbox', {name: 'Username'}).fill('tomsmith');
    await page.getByRole('textbox', {name: 'Password'}).fill('SuperSecretPassword!');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    await expect(page.getByRole('heading', {name: 'Secure Area', level: 2})).toBeVisible();

})

test('login success with invalid password', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login', {waitUntil: 'domcontentloaded'});
    await page.getByRole('textbox', {name: 'Username'}).fill('tomsmith');
    await page.getByRole('textbox', {name: 'Password'}).fill('SuperSecretPassword');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Your password is invalid! ×')).toBeVisible();
})

test('login success with invalid username', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login', {waitUntil: 'domcontentloaded'});
    await page.getByRole('textbox', {name: 'Username'}).fill('tomsmith!');
    await page.getByRole('textbox', {name: 'Password'}).fill('SuperSecretPassword!');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Your username is invalid! ×')).toBeVisible();
})