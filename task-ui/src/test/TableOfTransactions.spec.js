// import test dependencies
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

// import component
import TableOfTransactions from '../components/TableOfTransactions';
import TableRow from '../components/TableRow';

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

describe('<TableOfTransactions />', () => {
    it('should render a table of transactions by the transaction prop', () => {
        const wrapper = shallow(<TableOfTransactions transactions={SAMPLE_DATA.TRANSACTIONS}/>);
        expect(wrapper.find(TableRow)).to.have.length(3);
    });
});

