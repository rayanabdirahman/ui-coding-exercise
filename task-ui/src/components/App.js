// import react dependencies
import React, { Component } from 'react';

// import sortTransactionsByAmount from task-library
import { sortTransactionsByAmount } from 'task-library/sortTransactionsByAmount';

// import searchTransactionsByName from task-library
import { searchTransactionsByName } from 'task-library/searchTransactionsByName';

// URL to transactions
const ENDPOINT = 'http://localhost:3000/transactions';

// import components
import TableOfTransactions from './TableOfTransactions';

class App extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      // store transaction array
      transactions: []
    }
  }

  // when component has mounted
  componentDidMount() {
    /**
     * fetch transaction data from http://localhost:3000/transactions
     * @param {string} ENDPOINT - url string 
     */
    fetch(ENDPOINT)
      // convert response data to JSON
      .then(respnse => respnse.json())
      // set JSON transactions data into this.state.transactions
      .then(data => this.setState({ transactions: data}))
      // catch any given errors
      .catch(error => console.error(`Error: Data could not be fetched - ${error}`));
  }


  render() {
    return (
      <div>
        <TableOfTransactions transactions={this.state.transactions}/>
      </div>
    )
  }
};

export default App;
