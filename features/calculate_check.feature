Feature: Calculate_with_different_operators

Scenario: Various calculations with PLUS, MINUS, TIMES AND DIV. Verifies that a result is expected.

  Given I open Calculator's web page
  
  When Pressed button is "BUTTON_1"
  When Pressed button is "BUTTON_0"
  When Pressed button is "BUTTON_PLUS"
  When Pressed button is "BUTTON_2"
  When Pressed button is "BUTTON_DOIT"
  Then Expected result is "12"
  Then Clear the result "BUTTON_CLEAR"


  When Pressed button is "BUTTON_1"
  When Pressed button is "BUTTON_5"
  When Pressed button is "BUTTON_MINUS"
  When Pressed button is "BUTTON_2"
  When Pressed button is "BUTTON_DOIT"
  Then Expected result is "13"
  Then Clear the result "BUTTON_CLEAR"


  When Pressed button is "BUTTON_1"
  When Pressed button is "BUTTON_5"
  When Pressed button is "BUTTON_TIMES"
  When Pressed button is "BUTTON_2"
  When Pressed button is "BUTTON_DOIT"
  Then Expected result is "30"
  Then Clear the result "BUTTON_CLEAR"

  When Pressed button is "BUTTON_1"
  When Pressed button is "BUTTON_8"
  When Pressed button is "BUTTON_DIV"
  When Pressed button is "BUTTON_2"
  When Pressed button is "BUTTON_DOIT"
  Then Expected result is "9"
  Then Clear the result "BUTTON_CLEAR"