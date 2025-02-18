import React, { useState } from 'react';
import CardMenu from "./CardMenu";
import "./CardMenu.css";
import "./Serch.css";
import FirstMainPage from './FirstMainPage';
import SecondMainPage from './SecondMainPage';

function MainPage({addToBasket}) {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            {currentPage === 1 ? (
                <FirstMainPage 
                addToBasket = {addToBasket} />
            ) : (
                <SecondMainPage
                addToBasket = {addToBasket} />
                
            )}

            <div className='buttonNextDiv'>
                <button
                    className='clickbutton buttonLabel'
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                >
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Назад</span>

                </button>
                <button
                    className='clickbutton buttonLabel'
                    onClick={() => setCurrentPage(2)}
                    disabled={currentPage === 2}
                >
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Вперед</span>
                </button>
            </div>
        </>
    );
}

export default MainPage;
