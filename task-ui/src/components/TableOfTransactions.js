// import react dependencies
import React from 'react';

// import components
import TableRow from './TableRow';

// Take an Array of transactions and render it as a table
const TableOfTransactions = props => {
    // store transactions array from props
    const { transactions } = props;

    // map through transactions array
    const mappedTransactions = transactions.map((transaction, index) => {
        return (
            <TableRow 
            key={index}
            id={transaction.id} 
            amount={transaction.amount} 
            business={transaction.business} 
            name={transaction.name} 
            type={transaction.type} 
            account={transaction.account} 
            />
        );
    });

    // return table
    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>amount</td>
                    <td>business</td>
                    <td>name</td>
                    <td>type</td>
                    <td>account</td>
                </tr>
            </thead>
            <tbody>
                {mappedTransactions}
            </tbody>
        </table>
    )
};

// export TableOfTransactions
export default TableOfTransactions;