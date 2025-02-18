
import CardMenu from "./CardMenu";
import React, { useState } from 'react';
import "./CardMenu.css";
function additional({addToBasket}) {
    const [searchQuery, setSearchQuery] = useState('');

    const dishes = [
        { name: "Булочки с кунжутом", sostav: "Мука, вода, сахар, дрожжи, кунжут. 3 шт", price: 250 },
        { name: "Фокачча с розмарином", sostav: "Мука, вода, оливковое масло, розмарин, соль", price: 400 },
        { name: "Чиабатта", sostav: "Мука, вода, дрожжи, соль", price: 350 },
    ];

    const filteredDishes = dishes.filter((dish) =>
        dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    return (
        <>
            <input
                type="text"
                autoComplete="off"
                name="text"
                className="input"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="inRow">
                {filteredDishes.map((dish) => (
                    <CardMenu
                        name={dish.name}
                        sostav={"Состав: " + dish.sostav}
                        price={dish.price}
                        onAddToBasket={addToBasket}
                    />
                ))}
            </div>
        </>
    );
}
  
export default additional;
  