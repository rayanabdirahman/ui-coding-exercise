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
import SearchTransactions from './SearchTransactions';
import SortButton from './SortButton';

class App extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      // store transactions array
      transactions: [],
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
  /**
   * Get value from SearchTransactions and pass it to searchTransactionsByName
   * @param {event} e - change event
   */
  handleChange(e) {
    // store input value
    const searchedForName = e.target.value;
    
    // store array of filtered transactions
    const FilteredTransactions = searchTransactionsByName(searchedForName, this.state.transactions);

    // set filterTransaction array in state
    this.setState({filteredTransactions: FilteredTransactions});
  }

   /**
   * Sort transactions table by amount
   * @param {event} e - change event
   */
  handleClick(e) {
    // store array of transactions
    const transactionsArr = this.state.filteredTransactions || this.state.transactions;

    // store array of sorted transactions
    const sortedTransactions = sortTransactionsByAmount(transactionsArr);
    
    // set filterTransaction array in state with sortedTransactions
    this.setState({filteredTransactions: sortedTransactions});
  };

  // render components
  render() {
    return (
      <div>
        <SearchTransactions handleChange={this.handleChange.bind(this)}/>
        <SortButton handleClick={this.handleClick.bind(this)}/>
        <TableOfTransactions transactions={this.state.filteredTransactions || this.state.transactions }/>
      </div>
    )
  }
};

// export App
export default App;
