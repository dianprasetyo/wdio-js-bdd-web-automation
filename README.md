### How to Run the test from terminal

1. npm install
2. npm run wdio

### Here is how this project is structured 

The .feature file serves as the entry point for each test case. When a feature file is executed, it calls its corresponding step definition, which defines the sequence of actions to be performed to complete the test. These step definitions, in turn, rely on page objects that encapsulate web elements and related actions. By organizing my tests in this way, I can keep my code modular and easy to maintain.
