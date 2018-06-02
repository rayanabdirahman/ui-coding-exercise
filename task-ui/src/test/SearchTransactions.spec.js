// import test dependencies
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

// import searchTransactionsByName function for task library
import { searchTransactionsByName } from 'task-library/searchTransactionsByName';

// import component
import SearchTransactions from '../components/SearchTransactions';

// store sample transaction data
const SAMPLE_DATA = {
    TRANSACTIONS: [
        {
            "id": 3,
            "amount": 762.6,
            "date": "2012-02-02T00:00:00.000Z",
            "business": "Walsh LLC",
            "name": "Money Market Account 3194",
            "type": "withdrawal",
            "account": "03247568"
        },
        {
            "id": 2,
            "amount": 768.54,
            "date": "2012-02-02T00:00:00.000Z",
            "business": "Haag, Zemlak and DuBuque",
            "name": "Home Loan Account 2592",
            "type": "withdrawal",
            "account": "67554007"
        },
        {
            "id": 1,
            "amount": 384.8,
            "date": "2012-02-02T00:00:00.000Z",
            "business": "Medhurst Group",
            "name": "Home Loan Account 7230",
            "type": "withdrawal",
            "account": "02833054"
        }
    ]
};

/**
 *  on change event handler for SearchTransactions
 * @param {event} e - onChange event
 */
const handleChange = (e) => {
    // store searched for name
    const searchedForName = e.target.value;

    // store filter transactions
    const searchedForTransactions = searchTransactionsByName(searchedForName, SAMPLE_DATA.TRANSACTIONS);

    return searchedForTransactions;
};

// simulated event
const simulatedEvent = {target: {value: "Money Market Account 3194"}};

describe('<SearchTransactions />', () => {
    it('should be an input field', () => {
        const wrapper = shallow(<SearchTransactions />);
        expect(wrapper.find('input').exists()).to.equal(true);
    });

    it('should handle onChange events', () => {
        const wrapper = shallow(<SearchTransactions handleChange={handleChange}/>);
        wrapper.find('input').simulate('change', simulatedEvent);
    });

    it('it should return an array onChange', () => {
        const wrapper = shallow(<SearchTransactions handleChange={handleChange}/>);
        wrapper.find('input').simulate('change', simulatedEvent);

        expect(handleChange(simulatedEvent)).to.deep.equal([SAMPLE_DATA.TRANSACTIONS[0]])
    });

});