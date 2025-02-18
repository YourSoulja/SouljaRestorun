import React, { useState } from 'react';
import CardMenu from "./CardMenu";
import "./CardMenu.css";
import "./Serch.css";

function SecondMainPage({ addToBasket }) {
    const [searchQuery, setSearchQuery] = useState('');

    const dishes = [
        { name: "Фуа-гра с ягодным соусом", sostav: "Фуа-гра, ягодный соус, тосты", price: 6000 },
        { name: "Тартар из говядины с трюфелем", sostav: "Говядина, трюфель, яйца, специи", price: 4500 },
        { name: "Креветки в соусе из белого вина", sostav: "Креветки, белое вино, чеснок, зелень", price: 3500 },
        { name: "Стейк из мраморной говядины с соусом бордо", sostav: "Мраморная говядина, соус бордо, овощи", price: 7000 },
        { name: "Лобстер на гриле с лимонным маслом", sostav: "Лобстер, лимон, оливковое масло", price: 3200 },
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

export default SecondMainPage;