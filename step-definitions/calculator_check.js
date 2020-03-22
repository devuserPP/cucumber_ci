const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const page = client.page.calculator_page();



//@check let counter=0;

Given(/^I open Calculator's web page$/, () => {
  return page.navigate();  
});


When('Pressed button is {string}', function (input) {  
//@check  counter++;
//@check  client.saveScreenshot('./tests_output/step_result_'+counter+'.png') 
  return page.click("@"+input);

});

Then('Expected result is {string}', function (expected) {
  return page.assert.value('@DISPLAY', expected);
});

Then('Clear the result {string}', function (input) {  
  
  return page.click("@"+input);
});
