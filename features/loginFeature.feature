	Feature: Login Feature
    Scenario: Any User with valid credentials can log in to app
    Given User on login page
    When User enters emailId,password and click signin button
    Then User should be able to sign off from the app