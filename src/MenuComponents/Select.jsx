import './Select.css';
import { Link } from 'react-router-dom';

function Select() {
  return (
    <>
      <div className="cards">
        <Link to="/mainPage" className="card" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/hach.jpeg')` }}>
          <p className="tip">Основное</p>
        </Link>

        <Link to="/secondPage" className="card" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/czezar-s-kuriczej.jpg')` }}>
          <p className="tip">Второе</p>
        </Link>

        <Link to="/desserts" className="card" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/desert.jpg')` }}>
          <p className="tip">Десерты</p>
        </Link>

        <Link to="/additional" className="card" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/dop.jpg')` }}>
          <p className="tip">Дополнительно</p>
        </Link>

        <Link to="/drinks" className="card" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/drinks.jpeg')` }}>
          <p className="tip">Напитки</p>
        </Link>

        <Link to="/hookah" className="card" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/kalina.jpg')` }}>
          <p className="tip">Кальян</p>
        </Link>
      </div>
    </>
  );
}

export default Select;