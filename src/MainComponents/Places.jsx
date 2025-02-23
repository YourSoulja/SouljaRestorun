import { useEffect, useRef } from 'react';
import './Places.css';
import RotatingText from './RotatingText';

function Sap() {
    return (
        <>
            <RotatingText
                texts={['снаружи', 'внутри']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0, x: 7 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
            />
            <div className="parent" data-aos="fade-up">
                <div className="card-container">
                    <div className="cardPlaces">
                        <div className="front-content">
                            <h1>Ресторан снаружи</h1>
                        </div>
                        <div className="content" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/out.jpg')` }}>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="cardPlaces">
                        <div className="front-content">
                            <h1>Ресторан внутри</h1>
                        </div>
                        <div className="content" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/in.jpg')` }}>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="cardPlaces">
                        <div className="front-content">
                            <h1>Бар</h1>
                        </div>
                        <div className="content" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/bar.png')` }}>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="cardPlaces">
                        <div className="front-content">
                            <h1>V.I.P</h1>
                        </div>
                        <div className="content" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/Vip.jpg')` }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sap;