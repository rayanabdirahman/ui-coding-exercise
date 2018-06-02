// import react dependencies
import React from 'react';

// Search functionality to allow users to filter transactions by name
const SearchTransactions = props => (
    <input type="text" placeholder="search for transactions by name" value={props.searchValue} onChange={props.handleChange}/>
);

// export SearchTransactions
export default SearchTransactions;