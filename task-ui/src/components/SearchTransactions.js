// import react dependencies
import React from 'react';

const SearchTransactions = (props) => {
    return (
        <input type="text" placeholder="search for transactions by name" onChange={props.handleChange}/>
    )
};

export default SearchTransactions;