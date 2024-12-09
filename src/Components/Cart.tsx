// src/components/Cart.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import { RootState } from '../store';
import "./Cart.css";


const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className='cart'>
            <h2>Корзина</h2>
            {items.length === 0 ? (
                <p>Корзина пуста.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <span>{item.title} - ${item.price}</span>
                            <button className='removeButton' onClick={() => handleRemove(item.id)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;