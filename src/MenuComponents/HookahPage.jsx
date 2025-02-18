import CardMenu from "./CardMenu";
import React, { useState } from 'react';
import "./CardMenu.css";
function hookah({addToBasket}) {
    const [searchQuery, setSearchQuery] = useState('');

    const dishes = [
        { name: "Кальян «Тропический рай»", sostav: "Ананас, манго, кокос", price: 1500 },
        { name: "Кальян «Ягодный микс»", sostav: "Клубника, малина, черная смородина", price: 1400 },
        { name: "Кальян «Мятный свежесть»", sostav: "Мята, лимон, лед", price: 1300 },
        { name: "Кальян «Классический»", sostav: "Виноград, яблоко, персик", price: 1200 },
        { name: "Кальян «Цитрусовая симфония»", sostav: "Апельсин, грейпфрут, лимон", price: 1450 },
        { name: "Кальян «Специи Востока»", sostav: "Корица, кардамон, гвоздика", price: 1600 },
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
  
export default hookah;
  