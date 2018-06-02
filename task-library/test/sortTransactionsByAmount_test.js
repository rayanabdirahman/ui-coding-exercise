/*
 * Test suite for sorting transactions by amount
 */

// import expect function from chai
const expect = require('chai').expect;

/*
 * @param {string} sortTransactionsByAmount - description for test suite
 * @param {funciton} wrapper for unit tests
 */
describe('sortTransactionsByAmount', () => {
  // import sortTransactionsByAmount function
  const sortTransactionsByAmount = require('../sortTransactionsByAmount').sortTransactionsByAmount;

  /*
   * @type {object}
   * @description Store sample data
   */
  const SAMPLE_DATA = {
    TRANSACTIONS: [],
    SORTED_ARRAY: []
  };

  /*
   * @function before
   * @description run sample data before test specs
   */
  before(() => {
    SAMPLE_DATA.TRANSACTIONS = [
      {"amount": 85.91},
      {"amount": 15.01},
      {"amount": 10.01},
      {"amount": 29.00},
      {"amount": 0.01},
      {"amount": 185.75}
    ]

    SAMPLE_DATA.SORTED_ARRAY = [
      {"amount": 0.01},
      {"amount": 10.01},
      {"amount": 15.01},
      {"amount": 29.00},
      {"amount": 85.91},
      {"amount": 185.75}
    ]
  });

  // test specs
  it('should return an array', () => {
    expect(sortTransactionsByAmount(SAMPLE_DATA.TRANSACTIONS)).to.be.an('array');
  });

  it('should sort array by amount', () => {
    expect(sortTransactionsByAmount(SAMPLE_DATA.TRANSACTIONS)).to.deep.equal(SAMPLE_DATA.SORTED_ARRAY);
  });
});

