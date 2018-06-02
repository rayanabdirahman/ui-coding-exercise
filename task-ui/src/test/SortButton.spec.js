// import test dependencies
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

// import sortTransactionsByAmount function for task library
import { sortTransactionsByAmount } from 'task-library/sortTransactionsByAmount';

// import component
import SortButton from '../components/SortButton';

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
    ],
    SORTED_ARRAY: [
        {
            "id": 1,
            "amount": 384.8,
            "date": "2012-02-02T00:00:00.000Z",
            "business": "Medhurst Group",
            "name": "Home Loan Account 7230",
            "type": "withdrawal",
            "account": "02833054"
        },
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
        }
    ]
};

// click event handle for SortButton
const handleClick = () => {
    const sortedTransactions = sortTransactionsByAmount(SAMPLE_DATA.TRANSACTIONS);
};

describe('<Sort />', () => {
    it('should be a button', () => {
        const wrapper = shallow(<SortButton />);
        expect(wrapper.find('button').exists()).to.equal(true);
    });

    it('should handle click events', () => {
        const wrapper = shallow(<SortButton handleClick={handleClick}/>);
        wrapper.find('button').simulate('click');
    })

    it('should sort transactions by amount once clicked', () => {
        const wrapper = shallow(<SortButton handleClick={handleClick}/>);
        expect(wrapper.find('button').exists()).to.equal(true);

        wrapper.find('button').simulate('click');

        expect(SAMPLE_DATA.TRANSACTIONS).to.deep.equal(SAMPLE_DATA.SORTED_ARRAY);

    });
});