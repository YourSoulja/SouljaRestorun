import CardMenu from "./CardMenu";
import React, { useState } from 'react';
import "./CardMenu.css";
function desert({addToBasket}) {
    const [searchQuery, setSearchQuery] = useState('');

    const dishes = [
        { name: "Тирамису", sostav: "Савоярди, кофе, маскарпоне, какао-порошок", price: 800 },
        { name: "Шоколадный фондан", sostav: "Темный шоколад, яйца, сахар, сливочное масло", price: 900 },
        { name: "Панна котта с ягодами", sostav: "Сливки, сахар, желатин, свежие ягоды", price: 700 },
        { name: "Фруктовый тарт", sostav: "Тесто, крем патисьер, свежие фрукты", price: 850 },
        { name: "Морозное желе с мятой", sostav: "Фрукты, мятный сироп, желатин", price: 600 },
        { name: "Чизкейк Нью-Йорк", sostav: "Творожный сыр, сахар, печенье, сливочное масло", price: 950 },
        { name: "Крем-брюле", sostav: "Сливки, сахар, яичные желтки, ваниль", price: 800 },
        { name: "Пирожное эклер", sostav: "Тесто, крем, шоколадная глазурь", price: 500 },
        { name: "Ягодный мусс", sostav: "Ягоды, сливки, сахар, желатин", price: 750 },
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
  
export default desert;
  