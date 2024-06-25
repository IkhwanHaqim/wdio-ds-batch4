describe('Saucedemo login test', () => {
    it('Successful login and navigate to cart', async () => {
        await browser.url('https://www.saucedemo.com/')

        // element definition
        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@value="Login"]')

        const addToCartButton = await browser.$("#add-to-cart-sauce-labs-backpack")
        const removeButton = await browser.$("#remove-sauce-labs-backpack")
        const cartIcon = await browser.$("#shopping_cart_container")
       
        
        // login page
        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue("secret_sauce")
        await loginButton.click()
        await browser.pause(2000)

        // add to cart
        await addToCartButton.click()
        await browser.pause(2000)

        // verify item added
        await expect(removeButton).toBeDisplayed()
        await expect(cartIcon).toBeDisplayed()

        // navigate to cart
        await cartIcon.click()
        await browser.pause(2000)

       
    });
});
