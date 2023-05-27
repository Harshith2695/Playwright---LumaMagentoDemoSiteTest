# Playwright---LumaMagentoDemoSiteTest
Page Object Model automation testing solution implemented using Playwright 

![image](https://user-images.githubusercontent.com/49988272/234053486-b6d63616-13c9-466f-8443-281bc9213a49.png)


## About

This is a personal project to develop automated testing solution for demo e-commerce website Luma Magento (https://magento.softwaretestingboard.com). 

Built using Node.JS and Playwright with POM approach.

The website is divided into pages as below:

```
-Homepage 
-Product Listing Page
-Product Description Page
-Cart Page
-Checkout Page
```

The methods to interact with the elements and element locators are present in each page object class.

Refer https://playwright.dev/docs/intro for more details

## Pre Requisites 

Below softwares or tools needs to be installed to execute the tests


| Software/Tool        | Version       | 
| -------------------- |:-------------:| 
| <a title="Microsoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg"><img width="75" alt="Visual Studio Code 1.35 icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"></a>      | <a href="https://code.visualstudio.com/download">Latest</a> |
| <a title="node.js authors, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg"><img width="75" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png"></a>      | <a href="https://nodejs.org/en/download">Latest Stable Version</a>      |
 
## Test Execution commands

Run all the tests

`npx playwright test --headed`

Run single test

`npx playwright test <filepath> --headed --project "<browser>"`

file path is path to test script
 
Ex: ./tests/addToCartAndOrder.spec.ts

browser can be one of below


|<a title="See page for author, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Google_Chrome_icon_(2011).png"><img width="75" alt="Google Chrome icon (2011)" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"></a>|Google Chrome|
|----|:---:|
|<a title="Mozilla Corporation, MPL 2 &lt;https://www.mozilla.org/en-US/MPL/2.0/&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Firefox_logo,_2019.svg"><img width="75" alt="Firefox logo, 2019" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/64px-Firefox_logo%2C_2019.svg.png"></a>|Firefox|
|<a title="Microsoft Corporation, MIT &lt;http://opensource.org/licenses/mit-license.php&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Microsoft_Edge_logo_(2019).png"><img width="512" alt="Microsoft Edge logo (2019)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Microsoft_Edge_logo_%282019%29.png/512px-Microsoft_Edge_logo_%282019%29.png"></a>|Microsoft Edge|
|<a title="Apple Inc.Vectorization:  CMetalCore, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Safari_browser_logo.svg"><img width="75" alt="Safari browser logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/128px-Safari_browser_logo.svg.png"></a>|Safari|

## Reports

Test report can be viewed by executing 

`npx playwright show-report`

![image](https://user-images.githubusercontent.com/49988272/234057629-708925ad-1f05-473d-ac29-650ea030dff0.png)

## Attribution

Browser and tools/software images are obtained via Wikimedia Commons (https://commons.wikimedia.org/wiki/Main_Page)
