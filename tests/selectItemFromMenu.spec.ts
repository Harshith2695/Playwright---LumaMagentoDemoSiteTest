import test from "@playwright/test";
import { HomePage } from "../pageObjects/homePage";

test('User can select a menu item ', async ({page})=> {
   const homePage = new HomePage (page);
   await homePage.navigateToHomePage();
   await homePage.selectCategory ('Men');
});