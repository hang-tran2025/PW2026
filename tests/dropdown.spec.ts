import {test, expect} from '@playwright/test';
test('verify select a dropdown success', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown', {waitUntil: 'domcontentloaded'});
    await page.getByRole('combobox').selectOption('1');
    await expect(page.getByRole('combobox')).toHaveValue('1'); 
    
})

test('verify select multiple dropdown success', async ({page}) => { 
    await page.goto('https://qa-demo-site-ten.vercel.app/elements/dropdown', {waitUntil: 'domcontentloaded'});

    await page.getByRole('listbox').selectOption([{label: 'TypeScript'}, {label: 'Python'}]);
    await expect(page.getByRole('listbox').locator('option:checked')).toHaveText(['TypeScript', 'Python']);
})