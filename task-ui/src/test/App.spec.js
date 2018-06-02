// sanity check
const expect = require('chai').expect;

function add (a, b) {
    return a + b;
};

describe('add', () => {
    it('should add positive numbers', () => {
        expect(add(1,2)).to.equal(3);
    });
});