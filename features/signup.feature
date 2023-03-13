Feature: Autobahn Sign Up Page

  Scenario: As a user, I can create new account
  
    Given I am on the "login" page
    When user input a valid random email
    And user input a random strong password 
    And user click sign up button
    And user enter first name
    And user enter last name
    And user choose industry
    And user enters a random us phone number
    And user click start using autobahn
    Then user should see a message saying "Verify Your Email"
