import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ornament }) => {
    const daimond = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p>ornament:{daimond}</p>
        </div>
    );
};

export default Special;