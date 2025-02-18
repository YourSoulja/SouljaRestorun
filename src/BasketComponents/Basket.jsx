import React, { useState } from 'react';
import './Basket.css';

function Basket({ items, clearBasket }) {
    const [active, setActive] = useState(false);
    
    let totalPrice = items.reduce((total, item) => total + (item.price * item.count), 0);

    return (
        <>
            <div className="basket">
                {items.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className='basketLi'>
                                {item.name} - {item.count} шт.
                            </li>
                        ))}
                        
                        <p className='priceP'>Цена: {totalPrice} ₽</p> 
                    </ul>
                )}
            </div>
            <div className='basketButtons'>
                <button className="btn-shine buttonBasket" onClick={clearBasket}>
                    <span>Очистить корзину</span>
                </button>
                <button className="btn-shine buttonBasket" onClick={() => setActive(true)}>
                    <span>Заказать</span>
                </button>
            </div>

            <div className={active ? "overlay active" : "overlay"} onClick={() => setActive(false)}></div>

            <div className={active ? "parentBasket active" : "parentBasket"} onClick={() => setActive(false)}>
                <div className="cardOver" onClick={e => e.stopPropagation()}>
                    <h2>Ваш заказ</h2>
                    <p className='basketOverP'>
                        <div className='scrollDiv'>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index} className='basketOverLi'>
                                        {item.name} - {item.count} шт.
                                    </li>
                                ))}

                            </ul>

                        </div>
                        <p className='priceP'>Итого: {totalPrice} ₽</p> 

                        <button className='buttnEnd' onClick={() => { clearBasket(); setActive(false); }}>
                            Оформить
                        </button>
                    </p>
                </div>
            </div>
            
        </>
    );
}

export default Basket;
