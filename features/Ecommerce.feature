Feature: Ecommerce Validations

    Scenario: Placing the order with valid details
    Given A login to Ecommerce website with valid "username" and "password"
    When Add "zara coat 3" to the cart and proceed to checkout
    Then Verify "zara coat 3" is displayed in the cart
    When Enter valid details for checkout and place the order
    Then Verify the order in the order history