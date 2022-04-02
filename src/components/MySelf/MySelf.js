import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h2>Myself</h2>
            <p>house:{house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;