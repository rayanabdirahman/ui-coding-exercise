'use strict';

/*
 * @function searchTransactionsByName
 * @param {string} name - name to search for
 * @param {array} transactions - an array of transactions
 * @description Search over an Array of transactions using name
 */
const searchTransactionsByName = (name, transactions) => {
  /*
   * search over an Array of transactions using name
   * @param {array} transaction - transaction array
   */
  return transactions.filter(transaction => {
    /*
     * regex to find match for searched name
     * @param {string} name - name of searched for transaction
     * @param {string} 'gi' - regex global and insensitive flags
     */
    const regex = new RegExp(name, 'gi');

    // return transaction.name if it is a match
    return transaction.name.match(regex);
  });
};

// export searchTransactionsByName function
module.exports.searchTransactionsByName = searchTransactionsByName;

