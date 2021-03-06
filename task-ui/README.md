## Part 2: UI project

> You can find the solution for this exercise  in the `task-ui` directory.

Using the **Test Server** write a user interface that renders a **grid** of transactions.

### Requirements

* Write a react component that takes an `Array` of **transactions** and render it as a table. The table must have headers for each column.
* Using the library from the previous task, add a **search** functionality to the table to allow users to search over the `name` field of the transactions list.
* Using the library from the previous task, add a **sort** functionality to the table to allow users to sort over the `amount` field of the transactions list.
* Write a react application that fetches a list of **transactions** from the test server described below and uses the component from the previous point to render the list of **transactions**

### Acceptance criteria

* Your project must have unit tests.
* Your project must have a README.md file that explains how to build it, run the tests and explains how test your project in a browser.

### Built with
* [React](https://reactjs.org/)
* [webpack](https://webpack.js.org/)
* [babel](https://babeljs.io/)
* [mocha](https://mochajs.org/)
* [chai](http://www.chaijs.com/)
* [enzyme](http://airbnb.io/enzyme/)
* [CSS]

### Install dev dependencies
* `npm install`

### Usage
* To begin, you will need to start the test server in the ui-coding-exercise folder. to start the test server run `npm run server`
* You can then run `npm start` in task-ui folder to start the app. The app will be running on [http://localhost:8080/](http://localhost:8080/)
* to build run `npm run build`

### Running the tests
* run unit tests using `npm test`
* watch unit tests using `npm run test:watch`
