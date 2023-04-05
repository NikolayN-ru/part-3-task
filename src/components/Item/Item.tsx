import { FC } from "react";
import { Link } from "react-router-dom";
import s from "./Item.module.scss";

const Item: FC<any> = ({ title, id, image }):JSX.Element => {
  return (
    <Link to={`/item/${id}`}>
      <div className={s.wrap}>
        <img src={image} alt="sort" />
        <div className={s.wrapDescription}>
          <p>450 мл</p>
          <p>{title}</p>
          <p>
            Штрихкод: <span>4604049097548</span>
          </p>
          <p>
            Производитель: <span>Нэфис</span>
          </p>
          <p>
            Бренд: <span>AOS</span>
          </p>
          <div className={s.price}>
            <span>48,76 ₸ </span>
            <button>В КОРЗИНУ</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
