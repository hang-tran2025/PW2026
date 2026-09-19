import {test, expect} from '@playwright/test';
test('verify dropdown success', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown', {waitUntil: 'domcontentloaded'});
    await page.getByRole('combobox').selectOption('1');
    await expect(page.getByRole('combobox')).toHaveValue('1'); 
    
})