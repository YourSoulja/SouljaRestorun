import React, { useState } from 'react';
import './CardMenu.css';

function CardMenu({ name, sostav, price, onAddToBasket }) {
    const [ordered, setOrdered] = useState(false);

    const handleOrder = () => {
        setOrdered(true);
        onAddToBasket({ name, price, count: 1 });
    };

    return (
        <div className="card">
            <div className="card-details">
                <p className="text-title">{name}</p>
                <p className="text-body">{sostav}</p>
                <p className="text-price">{price} руб.</p>
            </div>
            <span className="card-button">
                <button className="animated-button" onClick={handleOrder}>
                    Заказать
                </button>
            </span>
        </div>
    );
}

export default CardMenu;