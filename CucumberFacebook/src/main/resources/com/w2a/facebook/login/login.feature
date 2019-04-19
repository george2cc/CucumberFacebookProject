Feature: Login to Facebook.com

In order to access Application
As a admin
I want to login

Scenario: Login in to Facebook.com

Given I open "testsiteurl" on "browser"
And I enter "username" as "selenium111"
And I enter "password" as "selenium@123"
And I click on "signin"
Then login should be a "success"