Feature: Click_Calculator_Buttons

Scenario: Clicks buttons and verifies the display value is expected.

  Given I open Calculator's web page
  
  When Pressed button is "BUTTON_0"
  Then Expected result is "0"
  Then Clear the result "BUTTON_CLEAR"

  
  When Pressed button is "BUTTON_1"
  Then Expected result is "1"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_2"
  Then Expected result is "2"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_3"
  Then Expected result is "3"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_4"
  Then Expected result is "4"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_5"
  Then Expected result is "5"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_6"
  Then Expected result is "6"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_7"
  Then Expected result is "7"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_8"
  Then Expected result is "8"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_9"
  Then Expected result is "9"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_PLUS"
  Then Expected result is "+"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_MINUS"
  Then Expected result is "-"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_TIMES"
  Then Expected result is "*"
  Then Clear the result "BUTTON_CLEAR"
  
  When Pressed button is "BUTTON_DIV"
  Then Expected result is "/"
  Then Clear the result "BUTTON_CLEAR"