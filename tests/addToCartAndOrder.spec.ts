import test from "@playwright/test";
import { CartPage } from "../pageObjects/cartPage";
import { CheckoutPage } from "../pageObjects/checkOutPage";
import { HomePage } from "../pageObjects/homePage";
import { ProductDescriptionPage } from "../pageObjects/productDescriptionPage";
import { ProductListingPage } from "../pageObjects/productListingPage";

test('User adds product to cart and places the order', async ({page})=> {
   const homePage = new HomePage (page);
   await homePage.navigateToHomePage();
   await homePage.selectCategory ('Men');
   
    const productListingPage = new ProductListingPage (page);
    await productListingPage.selectARandomItem ();

    const productDescriptionPage = new ProductDescriptionPage (page);
    await productDescriptionPage.verifyProductDescriptionPage ();
    await productDescriptionPage.selectAnySize ();
    await productDescriptionPage.selectAnyColor ();
    await productDescriptionPage.addProductToCart ();

    const cartPage = new CartPage (page);
    await cartPage.checkOutCart ();

    const checkOutPage = new CheckoutPage (page);
    await checkOutPage.completeCheckoutForm ();
    await checkOutPage.placeOrderAndRetreiveOrderNumber (); 




})