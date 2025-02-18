import React, { useState } from 'react';
import CardMenu from "./CardMenu";
import "./CardMenu.css";
import "./Serch.css" 

function FirstMainPage({ addToBasket }) {
    const [searchQuery, setSearchQuery] = useState('');

    const dishes = [
        { name: "Хачапури", sostav: "Тесто, сыр, яйцо", price: 1200 },
        { name: "Филе миньон с трюфельным соусом", sostav: "Говядина, трюфельный соус, картофельное пюре", price: 4500 },
        { name: "Утиная грудка с вишневым соусом", sostav: "Утиная грудка, вишневый соус, овощи гриль", price: 3800 },
        { name: "Лосось на гриле с лимонным соусом", sostav: "Тесто, сыр, колбаса, томатный соус", price: 2000 },
        { name: "Суп", sostav: "Лосось, лимонный соус, спаржа", price: 3200 },
        { name: "Креветки в чесночном соусе", sostav: "Креветки, чеснок, оливковое масло, зелень", price: 2900 },
        { name: "Ризотто с белыми грибами", sostav: "Рис, белые грибы, пармезан", price: 1800 },
        { name: "Стейк рибай с соусом барбекю", sostav: "Говядина рибай, соус барбекю, картофель фри", price: 4000 },
        { name: "Куриные грудки с розмарином", sostav: "Куриные грудки, розмарин, картофель", price: 1500 },
        { name: "Паста с морепродуктами", sostav: "Паста, морепродукты, томатный соус", price: 2200 },
        { name: "Телятина, грибы, сливочный соус", sostav: "Телятина, грибы, сливочный соус", price: 3500 },
        { name: "Лазанья с ракушками", sostav: "Паста, ракушки, сыр, мясной фарш", price: 2000 },
    ];


    const filteredDishes = 
    dishes.filter((dish) =>
        dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );



    return (
        <>
            <input type="text" 
                    autocomplete="off" 
                    name="text" 
                    className="input" 
                    placeholder="Поиск..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
            <div className="inRow">
                {filteredDishes.map((dish, index) => (
                    <CardMenu
                        key={index}
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

export default FirstMainPage;