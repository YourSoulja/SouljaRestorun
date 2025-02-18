import CardMenu from "./CardMenu";
import React, { useState } from 'react';
import "./CardMenu.css";
function SecondPage({addToBasket}) {
    const [searchQuery, setSearchQuery] = useState('');

    const dishes = [
        { name: "Цезарь с курицей", sostav: "Куриное филе, салат Романо, пармезан, крутоны, соус Цезарь", price: 1200 },
        { name: "Креветки в чесночном соусе", sostav: "Креветки, чеснок, лимон, зелень", price: 2800 },
        { name: "Салат с тунцом и авокадо", sostav: "Тунец, авокадо, салат, лимонный сок, оливковое масло", price: 1500 },
        { name: "Филе утки с вишневым соусом", sostav: "Утиное филе, вишневый соус, гречка", price: 4000 },
        { name: "Греческий салат", sostav: "Помидоры, огурцы, фета, оливки, красный лук, оливковое масло", price: 1000 },
        { name: "Паста с курицей и брокколи", sostav: "Паста, куриное филе, брокколи, сливочный соус", price: 2200 },
        { name: "Запеченные овощи с фетой", sostav: "Овощи, фета, оливковое масло", price: 1500 },

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
  
export default SecondPage;
  