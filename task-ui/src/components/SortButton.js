// import react dependencies
import React from 'react';

// sort transactions in table
const SortButton = props => (
    <button className="btn--sort" type="button" onClick={props.handleClick}>Sort transactions by {props.order}</button>
);

// export SortButton
export default SortButton;