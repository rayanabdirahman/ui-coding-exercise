/*
 * Test suite for searching over name in an array of transactions
 */

// import expect function from chai
const expect = require('chai').expect;

/*
 * @param {string} searchTransactionsByName - description for test suite
 * @param {funciton} wrapper for unit tests
 */
describe('searchTransactionsByName', function() {
  // import searchTransactionsByName function
  const searchTransactionsByName = require('../searchTransactionsByName').searchTransactionsByName;

  /*
   * @type {object}
   * @description Store sample data
   */
  const SAMPLE_DATA = {
    TRANSACTIONS: []
  };

  /*
   * @function before
   * @description run sample data before test specs
   */
  before(() => {
    SAMPLE_DATA.TRANSACTIONS = [
      {"name": "Savings Account 6670"},
      {"name": "Current Account 2370"},
      {"name": "Business Account 8640"}
    ];
  });

  // test specs
  it('should return an array', () => {
    expect(searchTransactionsByName('Savings Account 6670', SAMPLE_DATA.TRANSACTIONS)).to.be.an('array');
  });

  it('should return searched for transaction', () => {
    expect(searchTransactionsByName('Savings Account 6670',SAMPLE_DATA.TRANSACTIONS)).to.deep.equal([SAMPLE_DATA.TRANSACTIONS[0]])
  });

  it('should be case insensitive when searching for transaction', () => {
    expect(searchTransactionsByName('savings account 6670',SAMPLE_DATA.TRANSACTIONS)).to.deep.equal([SAMPLE_DATA.TRANSACTIONS[0]])
  });

});

