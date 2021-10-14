$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/signupc.feature");
formatter.feature({
  "name": "Automation on uniform website application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Dashboard",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the dashboard page",
  "keyword": "Given "
});
formatter.step({
  "name": "user hover over the catalog",
  "keyword": "When "
});
formatter.step({
  "name": "user click on product",
  "keyword": "When "
});
formatter.step({
  "name": "user is directed to product page",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on product page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter details \"\u003cproduct\u003e\",\"\u003cprice\u003e\",\"\u003cmodel\u003e\"and \"\u003cquantity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user selects \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on filter button",
  "keyword": "When "
});
formatter.step({
  "name": "user gets the details of the product",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects product to be copied",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on copy",
  "keyword": "When "
});
formatter.step({
  "name": "copying is done",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects product to be deleted",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on delete",
  "keyword": "When "
});
formatter.step({
  "name": "user deletion is done",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on product name field",
  "keyword": "When "
});
formatter.step({
  "name": "product list is sortedin descending order",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on  model field",
  "keyword": "When "
});
formatter.step({
  "name": "list is sorted in ascending order",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on price field",
  "keyword": "When "
});
formatter.step({
  "name": "price row is sorted in descending order",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on quantity field",
  "keyword": "When "
});
formatter.step({
  "name": "user is sorted in descending order",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "price",
        "model",
        "quantity",
        "status"
      ]
    },
    {
      "cells": [
        "Brown T shirt",
        "1500",
        "RTS-012",
        "",
        "0"
      ]
    }
  ]
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on  unfirom application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_unfirom_application_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login buttton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.click_on_login_buttton()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepdefiniton.stepdefination.click_on_login_buttton(stepdefination.java:47)\r\n\tat ✽.click on login buttton(file:src/test/java/feature/signupc.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_will_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Dashboard",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hover over the catalog",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_hover_over_the_catalog()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_click_on_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is directed to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_directed_to_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on product page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter details \"Brown T shirt\",\"1500\",\"RTS-012\"and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enter_details_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.user_selects_status_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.click_on_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets the details of the product",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_the_details_of_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects product to be copied",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_selects_product_to_be_copied()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on copy",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_copy()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "copying is done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.copying_is_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects product to be deleted",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_selects_product_to_be_deleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on delete",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_delete()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user deletion is done",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_deletion_is_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on product name field",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_product_name_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "product list is sortedin descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.product_list_is_sortedin_descending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on  model field",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_model_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "list is sorted in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.list_is_sorted_in_ascending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on price field",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_price_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "price row is sorted in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.price_row_is_sorted_in_descending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on quantity field",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_quantity_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is sorted in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_sorted_in_descending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Given "
});
formatter.step({
  "name": "user hover over the menu",
  "keyword": "When "
});
formatter.step({
  "name": "user click on  the product",
  "keyword": "When "
});
formatter.step({
  "name": "user is navigated to product page",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on add product",
  "keyword": "When "
});
formatter.step({
  "name": "user is navigated to add product page",
  "keyword": "Then "
});
formatter.step({
  "name": "user adds \"\u003cproductname\u003e\",\"\u003cdescription\u003e\",\"\u003cmetatag\u003e\",\"\u003cmetatagdesc\u003e\",\"\u003cproducttag\u003e\" and \"\u003cmodel\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on save",
  "keyword": "When "
});
formatter.step({
  "name": "user data gets \"\u003cvalidated\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "productname",
        "description",
        "metatag",
        "metatagdesc",
        "producttag",
        "model",
        "validated"
      ]
    },
    {
      "cells": [
        "A",
        "White coat",
        "a",
        "apron",
        "ap12",
        "apr12",
        "Warning: Please check the form carefully for errors!"
      ]
    },
    {
      "cells": [
        "Apron",
        "White coat",
        "apron",
        "apron",
        "ap12",
        "apr12",
        "Success: You have modified products!"
      ]
    }
  ]
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on  unfirom application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_unfirom_application_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login buttton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.click_on_login_buttton()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepdefiniton.stepdefination.click_on_login_buttton(stepdefination.java:47)\r\n\tat ✽.click on login buttton(file:src/test/java/feature/signupc.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_will_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hover over the menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_hover_over_the_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on  the product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_click_on_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_navigated_to_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_add_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to add product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_navigated_to_add_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user adds \"A\",\"White coat\",\"a\",\"apron\",\"ap12\" and \"apr12\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_adds_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user data gets \"Warning: Please check the form carefully for errors!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_data_gets(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on  unfirom application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_unfirom_application_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login buttton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.click_on_login_buttton()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepdefiniton.stepdefination.click_on_login_buttton(stepdefination.java:47)\r\n\tat ✽.click on login buttton(file:src/test/java/feature/signupc.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_will_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hover over the menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_hover_over_the_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on  the product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_click_on_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_navigated_to_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add product",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_add_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to add product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_navigated_to_add_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user adds \"Apron\",\"White coat\",\"apron\",\"apron\",\"ap12\" and \"apr12\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_adds_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user data gets \"Success: You have modified products!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_data_gets(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to dashboard page",
  "keyword": "Given "
});
formatter.step({
  "name": "user hover over the menu element",
  "keyword": "When "
});
formatter.step({
  "name": "user click on  the product tag",
  "keyword": "When "
});
formatter.step({
  "name": "user is redirected to product page",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on product to be edited",
  "keyword": "When "
});
formatter.step({
  "name": "user is directed to edit page",
  "keyword": "Then "
});
formatter.step({
  "name": "user edits \"\u003cproductname\u003e\", \"\u003cdescription\u003e\", \"\u003cmetatagt\u003e\", \"\u003cmetatagdesc\u003e\", \"\u003cmetakey\u003e\", \"\u003cproductkey\u003e\" , \"\u003cmodel\u003e\",\"\u003cquantity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.step({
  "name": "user gets \"\u003cValidation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "productname",
        "description",
        "metatagt",
        "metatagdesc",
        "metakey",
        "productkey",
        "model",
        "quantity",
        "Validation"
      ]
    },
    {
      "cells": [
        "j",
        "leather",
        "j",
        "jacket",
        "jaket12",
        "jacket12",
        "jk12",
        "220",
        "Warning: Please check the form carefully for errors!"
      ]
    },
    {
      "cells": [
        "jacket",
        "leather",
        "jacket",
        "jacket",
        "jaket12",
        "jacket12",
        "jk12",
        "220",
        "Success: You have modified products!"
      ]
    }
  ]
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on  unfirom application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_unfirom_application_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login buttton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.click_on_login_buttton()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepdefiniton.stepdefination.click_on_login_buttton(stepdefination.java:47)\r\n\tat ✽.click on login buttton(file:src/test/java/feature/signupc.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_will_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Edit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_navigated_to_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hover over the menu element",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_hover_over_the_menu_element()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on  the product tag",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_click_on_the_product_tag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on product to be edited",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_click_on_product_to_be_edited()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is directed to edit page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_directed_to_edit_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user edits \"j\", \"leather\", \"j\", \"jacket\", \"jaket12\", \"jacket12\" , \"jk12\",\"220\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_edits(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets \"Warning: Please check the form carefully for errors!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on  unfirom application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_unfirom_application_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login buttton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.click_on_login_buttton()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepdefiniton.stepdefination.click_on_login_buttton(stepdefination.java:47)\r\n\tat ✽.click on login buttton(file:src/test/java/feature/signupc.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_will_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Edit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated to dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_navigated_to_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hover over the menu element",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_hover_over_the_menu_element()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on  the product tag",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_click_on_the_product_tag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on product to be edited",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_click_on_product_to_be_edited()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is directed to edit page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_directed_to_edit_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user edits \"jacket\", \"leather\", \"jacket\", \"jacket\", \"jaket12\", \"jacket12\" , \"jk12\",\"220\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_edits(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets \"Success: You have modified products!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on  unfirom application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_unfirom_application_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login buttton",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.click_on_login_buttton()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat stepdefiniton.stepdefination.click_on_login_buttton(stepdefination.java:47)\r\n\tat ✽.click on login buttton(file:src/test/java/feature/signupc.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user will be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_will_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is at dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_at_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hover over the catalog tag",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_hover_over_the_catalog_tag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on  the prod tag",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_click_on_the_prod_tag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to prod page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_navigated_to_prod_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add product element",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_add_product_element()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to adding product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_navigated_to_adding_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on cancel button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_cancel_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to the product page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_product_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});