// import react dependencies
import React, { Component } from 'react';

// import sortTransactionsByAmount from task-library
import { sortTransactionsByAmount } from 'task-library/sortTransactionsByAmount';

// import searchTransactionsByName from task-library
import { searchTransactionsByName } from 'task-library/searchTransactionsByName';

// URL to transactions
const ENDPOINT = 'http://localhost:3000/transactions';


class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
      </div>
    )
  }
};

export default App;
