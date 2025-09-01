Feature: The Internet TPICAP Website

  Scenario Outline: As a user, I open tpicap website and capture the title of the web application

    Given I am on the login page
    When I capture the title of the web application
    Then I print the title of the web application
   
    