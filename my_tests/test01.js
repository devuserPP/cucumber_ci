//zdroj https://nightwatchjs.org/api/#protocol
//#tutorial https://github.com/dwyl/learn-nightwatch
//#page object https://www.codementor.io/johnkennedy/e2e-testing-with-nightwatch-part-three-bzpnspxfn

module.exports = {
    'step one:  Clicks buttons and verifies the display value is expected.': function (browser) {
        
       const page = browser.page.calculator_page();
       page.navigate()
        .click('@BUTTON_1')
        .assert.value('@DISPLAY', '1')
        
        .click('@BUTTON_CLEAR')
        .click('@BUTTON_2')
        .assert.value('@DISPLAY', '2')
        
        .click('@BUTTON_CLEAR')
        .click('@BUTTON_3')
        .assert.value('@DISPLAY', '3')

        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_4')
        .assert.value('@DISPLAY', '4')
        
        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_5')
        .assert.value('@DISPLAY', '5')
        
        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_6')        
        .assert.value('@DISPLAY', '6')

        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_7')
        .assert.value('@DISPLAY', '7')
        
        
        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_8')
        .assert.value('@DISPLAY', '8')

        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_9')
        .assert.value('@DISPLAY', '9')
        
        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_PLUS')
        .assert.value('@DISPLAY', '+')

        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_MINUS')
        .assert.value('@DISPLAY', '-')
        
        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_TIMES')
        .assert.value('@DISPLAY', '*')
        
        .click('@BUTTON_CLEAR')        
        .click('@BUTTON_DIV')
        .assert.value('@DISPLAY', '/')
        .saveScreenshot('./tests_output/google01.png')


 
    browser.end()
},
'step two:  Clicks buttons and verifies the display value is expected.': function (browser) {


    browser.end();  }
}
