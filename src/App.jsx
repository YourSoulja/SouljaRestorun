import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Particles from './MainComponents/Particles';
import Sap from './MainComponents/Sap';
import Dock from './Dock';
import Places from './MainComponents/Places';
import './App.css';
import MainMenu from './MainComponents/MainMenu';
import Basket from './BasketComponents/Basket';
import Worker from './MainComponents/Worker';
import Reviews from './MainComponents/Reviews';
import Select from './MenuComponents/Select';
import MainPage from './MenuComponents/MainPage';
import SecondPage from './MenuComponents/SecondPage';
import DessertsPage from './MenuComponents/DessertsPage';
import AdditionalPage from './MenuComponents/AdditionalPage';
import DrinksPage from './MenuComponents/DrinksPage';
import HookahPage from './MenuComponents/HookahPage';

function App() {
    const [basketItems, setBasketItems] = useState(() => {
        const savedBasket = localStorage.getItem('basket');
        return savedBasket ? JSON.parse(savedBasket) : [];
    });

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basketItems));
    }, [basketItems]);

    const addToBasket = (item) => {
        setBasketItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.name === item.name);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.name === item.name ? { ...i, count: i.count + item.count } : i
                );
            } else {
                return [...prevItems, item];
            }
        });
    };
    

    const clearBasket = () => {
        setBasketItems([]);
        localStorage.removeItem('basket');
    };

    const itemsFromDock = [
        { icon: 'Home', link: '/' },
        { icon: 'Menu', link: '/menu' },
        { icon: 'Basket', link: '/basket' },
    ];

    const itemsForReviews = [
        { id: 1, content: <>Лучший опыт в ресторане! Атмосфера уютная, а блюда изысканные. Рекомендую всем! <br /> 5⭐</> },
        { id: 2, content: <>Средний опыт. Некоторые блюда были вкусными, но другие разочаровали. <br /> 3⭐</> },
        { id: 3, content: <>Каждый раз, когда мы приходим сюда, мы остаемся в восторге! Блюда всегда свежие и вкусные, а персонал очень дружелюбный. <br /> 5⭐</> },
        { id: 4, content: <>Идеальное место для семейного ужина. Дети были в восторге от десертов, а мы наслаждались отличным вином! <br /> 5⭐</> },
        { id: 5, content: <>Отличное место! Еда была вкусной, но нам немного не хватило разнообразия в меню. <br /> 4⭐</> },
        { id: 6, content: <>Вкусная еда и приятный сервис. Но музыка была немного громкой <br /> 4⭐</> },
        { id: 7, content: <>Хорошее место для ужина. Понравилась еда, но ожидание заказа было немного долгим. <br /> 4⭐</> },
        { id: 8, content: <>Неплохой ресторан, но еда была средней. Ожидал большего от атмосферы. <br /> 3⭐</> },
        { id: 9, content: <>Отличный сервис и вкусные блюда, но цены немного завышены. <br /> 4⭐</> },
    ];

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="headerMain">
                                <Particles
                                    particleColors={['#ffffff', '#ffffff']}
                                    particleCount={200}
                                    particleSpread={10}
                                    speed={0.1}
                                    particleBaseSize={100}
                                    moveParticlesOnHover={true}
                                    alphaParticles={false}
                                    disableRotation={false}
                                />
                            </div>
                            <Sap />
                            <div className="navigation">
                                <Dock items={itemsFromDock} />
                            </div>
                            <Places />
                            <div style={{ height: '600px', position: 'relative' }}>
                                <MainMenu bend={3} textColor="#ffffff" borderRadius={0.15} />
                            </div>
                            <h1 data-aos="fade-right" className="h1Class">
                                Наши повара
                            </h1>
                            <div className="WorkerName" data-aos="fade-up">
                                <Worker
                                    name={'Шеф повар'}
                                    opitYear={'Опыт: 20 лет'}
                                    opitPlasec={'Ресторан "Кулинарное искусство" Отель "Премиум"'}
                                />
                                <Worker
                                    name={'Су-шеф'}
                                    opitYear={'Опыт: 7 лет'}
                                    opitPlasec={'Ресторан "Кулинарный рай" Кафе "Гастроном"'}
                                />
                                <Worker
                                    name={'Кондитер'}
                                    opitYear={'Опыт: 5 лет'}
                                    opitPlasec={'Пекарня "Сладкая жизнь" Ресторан "Десерт"'}
                                />
                                <Worker
                                    name={'Сомелье'}
                                    opitYear={'Опыт: 6 лет'}
                                    opitPlasec={'Ресторан "Винный погреб" Отель "Премиум"'}
                                />
                                <Worker
                                    name={'Повар-диетолог'}
                                    opitYear={'Опыт: 4 года'}
                                    opitPlasec={'Кафе "Здоровое питание" Ресторан "Фитнес-меню"'}
                                />
                                <Worker
                                    name={'Сушист'}
                                    opitYear={'Опыт: 8 лет'}
                                    opitPlasec={'Суши-бар "Сакура" Ресторан "Японская кухня"'}
                                />
                            </div>
                            <h1 data-aos="fade-right" className="h1Class">
                                Отзывы
                            </h1>
                            <div data-aos="zoom-in" style={{ height: '500px', position: 'relative' }}>
                                <Reviews
                                    items={itemsForReviews}
                                    isTilted={true}
                                    tiltDirection="left"
                                    autoplay={true}
                                    autoplaySpeed={0.1}
                                    autoplayDirection="down"
                                    pauseOnHover={true}
                                />
                            </div>
                            <div className="TgDiv">
                                <ul className="example-2">
                                    <li className="icon-content">
                                        <a
                                            data-social="telegram"
                                            aria-label="Telegram"
                                            href="https://t.me/YourSouljja"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="filled"></div>
                                            <svg viewBox="0 0 100 100" version="1.1">
                                                <path
                                                    fill="currentColor"
                                                    d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                                                ></path>
                                            </svg>
                                        </a>
                                        <div className="tooltip">Telegram</div>
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                />
                <Route
                    path="/menu"
                    element={
                        <>
                            <div className="navigation" data-aos='fade-down'>
                                <Dock items={itemsFromDock} />
                            </div>
                            <Select />
                        </>
                    }
                />
                <Route
                    path="/basket"
                    element={
                        <>
                            <div className="navigation" data-aos='fade-down'>
                                <Dock items={itemsFromDock} />
                            </div>
                            <Basket items={basketItems} clearBasket={clearBasket} />
                        </>
                    }
                />
                <Route
                    path="/mainPage"
                    element={
                        <>
                            <div className="navigation" data-aos='fade-down'>
                                <Dock items={itemsFromDock} />
                            </div>
                            <MainPage addToBasket={addToBasket} />
                        </>
                    }
                />
                <Route
                    path="/secondPage"
                    element={
                        <>
                            <div className="navigation" data-aos='fade-down'>
                                <Dock items={itemsFromDock} />
                            </div>
                            <SecondPage addToBasket={addToBasket} />
                        </>
                    }
                />
                <Route
                    path="/desserts"
                    element={
                        <>
                            <div className="navigation" data-aos='fade-down'>
                                <Dock items={itemsFromDock} />
                            </div>
                            <DessertsPage addToBasket={addToBasket} />
                        </>
                    }
                />
                <Route
                    path="/additional"
                    element={
                        <>
                            <div className="navigation" data-aos='fade-down'>
                                <Dock items={itemsFromDock} />
                            </div>
                            <AdditionalPage addToBasket={addToBasket} />
                        </>
                    }
                />
                <Route
                    path="/drinks"
                    element={
                        <>
                            <div className="navigation" data-aos='fade-down'>
                                <Dock items={itemsFromDock} />
                            </div>
                            <DrinksPage addToBasket={addToBasket} />
                        </>
                    }
                />
                <Route
                    path="/hookah"
                    element={
                        <>
                            <div className="navigation" data-aos='fade-down'>
                                <Dock items={itemsFromDock} />
                            </div>
                            <HookahPage addToBasket={addToBasket} />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;