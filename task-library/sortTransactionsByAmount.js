'use strict'

/*
 * @function sortTransactionsByAmount
 * @param {array} transactions - an array of transactions
 * @description Return a sorted array of transactions by amount
 */
const sortTransactionsByAmount = ({transactions, ascending=true}) => {
  /*
   * return a sorted array of transactions by amount
   * @param {object} a - transaction object needed for compareFunction;
   * @param {object} b - transaction object needed for compareFunction;
   */
  return transactions.sort((a, b) => {
    // store transaction amounts
    const transactionA = a.amount;
    const transactionB = b.amount;

    if(ascending) {
      // sort transactions by amount
      return transactionA - transactionB;
    }

    return transactionB - transactionA;
  });
};

// export sortTransactionsByAmount function
module.exports.sortTransactionsByAmount = sortTransactionsByAmount;
