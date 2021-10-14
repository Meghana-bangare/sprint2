Feature: Automation on uniform website application

  Background: Login functionality
    Given User is on  unfirom application login page
    When user enter "admin" and "admin@123"
    And click on login buttton
    Then user will be logged in

  Scenario Outline: Dashboard
    Given user is on the dashboard page
    When user hover over the catalog
    When user click on product
    Then user is directed to product page
    Given user is on product page
    When user enter details "<product>","<price>","<model>"and "<quantity>"
    And user selects "<status>"
    When click on filter button
    Then user gets the details of the product
    When user selects product to be copied
    When user clicks on copy
    Then copying is done
    When user selects product to be deleted
    When user clicks on delete
    Then user deletion is done
    When user clicks on product name field
    Then product list is sortedin descending order
    When user clicks on  model field
    Then list is sorted in ascending order
    When user clicks on price field
    Then price row is sorted in descending order
    When user clicks on quantity field
    Then user is sorted in descending order

    Examples: 
      | product       | price | model   | quantity | status |
      | Brown T shirt |  1500 | RTS-012 |          |      0 |

  Scenario Outline: 
    Given user is on dashboard page
    When user hover over the menu
    When user click on  the product
    Then user is navigated to product page
    When user clicks on add product
    Then user is navigated to add product page
    When user adds "<productname>","<description>","<metatag>","<metatagdesc>","<producttag>" and "<model>"
    When user clicks on save
    Then user data gets "<validated>"

    Examples: 
      | productname | description | metatag | metatagdesc | producttag | model | validated                             |
      | A           | White coat  | a       | apron       | ap12       | apr12 | Warning: Please check the form carefully for errors! |
      | Apron       | White coat  | apron   | apron       | ap12       | apr12 | Success: You have modified products!                 |

  Scenario Outline: Edit
    Given user is navigated to dashboard page
    When user hover over the menu element
    When user click on  the product tag
    Then user is redirected to product page
    When user click on product to be edited
    Then user is directed to edit page
    When user edits "<productname>", "<description>", "<metatagt>", "<metatagdesc>", "<metakey>", "<productkey>" , "<model>","<quantity>"
    When user clicks on save button
    Then user gets "<Validation>"

    Examples: 
      | productname | description | metatagt | metatagdesc | metakey | productkey | model | quantity | Validation                                           |
      | j           | leather     | j        | jacket      | jaket12 | jacket12   | jk12  |      220 | Warning: Please check the form carefully for errors! |
      | jacket      | leather     | jacket   | jacket      | jaket12 | jacket12   | jk12  |      220 | Success: You have modified products!                 |
 Scenario:
  Given user is at dashboard page
    When user hover over the catalog tag
    When user click on  the prod tag
    Then user is navigated to prod page
    When user clicks on add product element
    Then user is navigated to adding product page
    When user clicks on cancel button
    Then user is redirected to the product page
 