$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/w2a/facebook/login/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Facebook.com",
  "description": "\r\nIn order to access Application\r\nAs a admin\r\nI want to login",
  "id": "login-to-facebook.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Login in to Facebook.com",
  "description": "",
  "id": "login-to-facebook.com;login-in-to-facebook.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I open \"testsiteurl\" on \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"username\" as \"selenium111\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"password\" as \"selenium@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "login should be a \"success\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testsiteurl",
      "offset": 8
    },
    {
      "val": "browser",
      "offset": 25
    }
  ],
  "location": "LoginTest.i_open_on(String,String)"
});
formatter.result({
  "duration": 8763965548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "selenium111",
      "offset": 23
    }
  ],
  "location": "LoginTest.i_enter_as(String,String)"
});
formatter.result({
  "duration": 170393136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "selenium@123",
      "offset": 23
    }
  ],
  "location": "LoginTest.i_enter_as(String,String)"
});
formatter.result({
  "duration": 155357970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 12
    }
  ],
  "location": "LoginTest.i_click_on(String)"
});
formatter.result({
  "duration": 1254793879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 19
    }
  ],
  "location": "LoginTest.login_should_be_a(String)"
});
formatter.result({
  "duration": 104770,
  "status": "passed"
});
});