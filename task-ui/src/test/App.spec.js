// import test dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// config enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import { expect } from 'chai';

// // import component
import App from '../components/App';
import TableOfTransactions from '../components/TableOfTransactions';

describe('<App />', () => {
    it('should render', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(TableOfTransactions)).to.have.length(1);
    });
});
