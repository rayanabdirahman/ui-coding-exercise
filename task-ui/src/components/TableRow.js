// import react dependencies
import React from 'react';

// display table rows
const TableRow = props => {
    // store props values
    const { id, amount, business, name, type, account} = props;

    return (
        <tr>
            <td>{id}</td>
            <td>{amount}</td>
            <td>{business}</td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{account}</td>
        </tr>
    )
};

// export TableRow
export default TableRow;