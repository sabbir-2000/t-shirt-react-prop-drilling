import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './HOme.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirts()
    const [cart, setCart] = useState([])
    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt.id === selectedItem.id)
        if (!exists) {

            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else {
            alert('item already added')
        }
    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt.id !== selectedItem.id)
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt.id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;