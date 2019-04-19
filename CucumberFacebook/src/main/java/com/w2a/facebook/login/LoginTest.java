package com.w2a.facebook.login;

import com.w2a.facebook.core.WebConnector;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

//step file
public class LoginTest {
	
	@After
	public void closeBroser() {
		System.out.println("closes browser");
	
	}
	
	WebConnector selenium = new WebConnector();
	
	@Given("^I open \"([^\"]*)\" on \"([^\"]*)\"$")
	public void i_open_on(String url, String browser) {

		System.out.println("I open " +url+ " on "+ browser);
		selenium.openBrowser(browser);
		selenium.navigate(url);
	}

	@Given("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void i_enter_as(String locator, String value) {
		
		System.out.println("Entering in " +locator+"as"+ value);
		selenium.type(locator, value);
		

	}

	@Given("^I click on \"([^\"]*)\"$")
	public void i_click_on(String object) {
		
		System.out.println("Entering in " +object);
		selenium.click(object);

	}

	@Then("^login should be a \"([^\"]*)\"$")
	public void login_should_be_a(String expectedResult) throws Throwable {

		System.out.println("Login is "+ expectedResult);
		closeBroser();
	}

}
