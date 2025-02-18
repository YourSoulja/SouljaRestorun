import CardMenu from "./CardMenu";
import React, { useState } from 'react';
import "./CardMenu.css";
function drinks({addToBasket}) {
    const [searchQuery, setSearchQuery] = useState('');

    const dishes = [
        { name: "Лимонад с мятой", sostav: "Лимонный сок, мята, сахар, вода", price: 300 },
        { name: "Iced tea", sostav: "Чёрный или зелёный чай, лимон, сахар (по желанию)", price: 250 },
        { name: "Свежевыжатый сок (грейпфрут)", sostav: "Грейпфрут", price: 350 },
        { name: "Клубничный смузи", sostav: "Клубника, йогурт, сахар, лед", price: 400 },
        { name: "Мятный холодный чай", sostav: "Зелёный чай, мята, лимон, лед", price: 300 },
        { name: "Коктейль из тропических фруктов", sostav: "Ананас, манго, кокосовое молоко, лед", price: 450 },
        { name: "Чайный коктейль с ягодами", sostav: "Чай, свежие ягоды, сахар, лед", price: 400 },
        { name: "Айс-фьюри", sostav: "Эспрессо, урбеч, мороженное", price: 300 },
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
  
export default drinks;
  