
const CHROMEDRIVER = require("chromedriver");
const SCREENSHOT_PATH = "tests_output/reports/screenshots/";
const SELENIUM_SERVER_PATH = require('selenium-server-standalone-jar');
    
module.exports = {
  
    "src_folders" : ["my_tests"], // Where you are storing your Nightwatch e2e tests
    "page_objects_path" : ["page_objects"],
    "output_folder": "tests_output/reports", // reports (test outcome) output by nightwatch
   
    
    "selenium" : {
      "start_process" : true, // tells nightwatch to start/stop the selenium process
      // "server_path" : "$APPDATA/npm/node_modules/selenium-standalone/.selenium/selenium-server/3.141.5-server.jar",
      "server_path" : SELENIUM_SERVER_PATH.path,
      "log_path" : "tests_output/reports",
      "host": "127.0.0.1",
      "port" : 4444,
      "cli_args" : {        
        "webdriver.chrome.driver" : CHROMEDRIVER.path               
      }
    },


    "test_settings" : {
      "default" : {
        "screenshots": {
          "enabled": true, // if you want to keep screenshots
          "path": SCREENSHOT_PATH // save screenshots here},
        },
          "globals": {
            "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
          },
          "desiredCapabilities": { // use Chrome as the default browser for tests
            "browserName": "chrome",
            "chromeOptions": {
              "args" : ["--no-sandbox"],
              "w3c": false
            },
            "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
          }
        }
  }}
