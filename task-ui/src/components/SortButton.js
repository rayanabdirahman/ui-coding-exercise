// import react dependencies
import React from 'react';

const SortButton = (props) => {
    return (
        <button class="btn--sort" type="button" onClick={props.handleClick}>Sort transactions by amount</button>
    )
};

export default SortButton;