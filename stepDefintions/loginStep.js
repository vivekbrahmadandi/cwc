"use strict";
var loginPage=require("../pages/loginPage");
var homePage=require("../pages/homePage");
var { defineSupportCode } = require("cucumber");
var Utility = require('../common/selectBox');
var utility = new Utility();



defineSupportCode(function({Given,When,Then}) {
    Given(/^User on login page$/,{timeout: 80 * 1000}, function(){
            return  browser.get("http://10.9.8.196:5001/#!/idn/login");
    });
    When(/^User enters emailId,password and click signin button$/,{timeout: 80 * 1000},function(){
            loginPage.setUserName('vivekbrahmadandi@gmail.com');
            browser.sleep(5000);
            loginPage.setPassword('test1234');
            browser.sleep(5000);
            return  loginPage.clickSignInButton();
    });
    Then(/^User should be able to sign off from the app$/,{timeout:80*1000},function(){
            homePage.setUserName("vivek");
            browser.sleep(5000);
            homePage.clickRoleOption();
            browser.sleep(5000);
            homePage.clickNameLink();
            browser.sleep(5000);
            homePage.clickRoleBox();
            browser.sleep(5000);
            utility.selectOption(homePage.selectMenu, 'Candidate');
            homePage.clickUpdateButton();
            browser.sleep(5000);
            homePage.clickOpenMenuButton();
            var EC = protractor.ExpectedConditions;
            var  isLogoutButtonClickable = EC.elementToBeClickable(homePage.logoutButton);
			browser.wait(isLogoutButtonClickable, 20000, 'waited 20 seconds for searching logout button');
			homePage.clickLogoutButton();
            return browser.sleep(5000);
    });
});
    
