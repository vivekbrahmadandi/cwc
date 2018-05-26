var  HomePage= function () {
    this.accountBoxButton=element.all(by.css('button[ng-click="openMenu($mdOpenMenu, $event)"]')).last();
    this.logoutButton=element(by.css('a[ng-click="userLogout()"]'));
    this.searchUserTextBox=element(by.css('input[name="autocompleteField"]'));
    this.usersResult=element(by.css('tr[ng-repeat="person in users | filter: search.text"]'));
    this.nameLink=element(by.css('td[ng-click="editRole(person, $event)"]'));
    this.updateButton=element(by.css('button[ng-click="create()"]'));
    this.cancelButton=element(by.css('button[ng-click="closeDialog()"]'));
    this.roleOption=element(by.css('md-autocomplete-parent-scope[md-autocomplete-replace=""]'));
    this.roleBox=element(by.model('userRole'));
    this.selectMenu=element.all(by.tagName('md-select-menu'));  

    this.clickRoleBox = function() {
         this.roleBox.click();
    };

    //Partners

    this.clickRoleOption = function() {
         this.roleOption.click();
    };
    this.clickOpenMenuButton = function() {
         this.accountBoxButton.click();
    };
    this.clickLogoutButton = function() {
         this.logoutButton.click();
    };
    this.setUserName = function(value) {
        this.searchUserTextBox.clear().sendKeys(value);
    };
    this.isUserResultPresent=function(){
        return this.usersResult.isPresent();
    };
    this.clickNameLink = function() {
         this.nameLink.click();
    };
    this.clickUpdateButton = function() {
         this.updateButton.click();
    };

};
module.exports = new HomePage();