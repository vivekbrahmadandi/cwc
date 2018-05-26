var  LoginPage= function () {
    this.userName=element(by.model('user.username'));
    this.password=element(by.model('user.password'));
    this.signInButton=element(by.css('button[type="submit"]'));
    this.registerLink=element(by.css('a[ui-sref="idn.register"]'));

    this.setUserName = function(value) {
        this.userName.clear().sendKeys(value);
    };
    this.setPassword = function(value) {
        this.password.clear().sendKeys(value);
    };
    this.clickSignInButton = function() {
         this.signInButton.click();
    };
};
module.exports = new LoginPage();