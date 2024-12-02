Feature: End to End Ecommerce validation
@Regression
Scenario: Ecommerce products delivery
    Given I am on Ecommerce page
    When I log to the application
    And I add item to cart and checkout
    And validate the total price
    Then select the country and verify Thankyou

@Smoke
Scenario: Ecommerce products delivery
    Given I am on Ecommerce page
    When I log to the application portal
    |   username	        |   password    |
    |   rahulshettyacademy  |   learning    |
    And I add item to cart and checkout
    And validate the total price
    Then select the country and verify Thankyou