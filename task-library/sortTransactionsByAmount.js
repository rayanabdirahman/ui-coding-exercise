'use strict'

/*
 * @function sortTransactionsByAmount
 * @param {array} transactions - an array of transactions
 * @description Return a sorted array of transactions by amount
 */
const sortTransactionsByAmount = function(transactions) {
  /*
   * store sorted array into sortedArray
   * @param {object} a - transaction object needed for compareFunction;
   * @param {object} b - transaction object needed for compareFunction;
   */
  const sortedArray = transactions.sort((a, b) => {
    // store transaction amounts
    const transactionA = a.amount;
    const transactionB = b.amount;

    // sort transactions by amount
    return transactionA - transactionB;
  });

  return sortedArray;
};

// export sortTransactionsByAmount function
module.exports.sortTransactionsByAmount = sortTransactionsByAmount;
