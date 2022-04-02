import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //   conditional rendering option
    // 1.element variable
    // 2.ternary operator= condition ? true : false
    // 3.&& operator (shorthand)
    // || operator
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one items</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        <p><small>Thanks for adding items</small></p>
    }
    return (
        <div className='position'>
            <h2>Items selected:{cart.length}</h2>

            {
                cart.map(tshirt => <p>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button></p>)
            }
            {
                cart.length !== 0 || <p className='red'>YaY You are buying</p>
            }
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke gift diba..?</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
        </div>
    );
};

export default Cart;