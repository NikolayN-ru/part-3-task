import React from "react";
import s from "./Header.module.scss";
import Cart from "../Icons/Cart/Cart";
import { Link } from "react-router-dom";
import Mail from "../Icons/mail";
import Point from "../Icons/point";
import MenuHeader from "../MenuHeader/MenuHeader";

const Header = () => {
  return (
    <div className={s.wrap}>
      {/* <Link to="/" className={styles.header}>Страница товаров</Link>
      <Link to="/cart">
        {" "}
        <Cart />
      </Link> */}
      <div className={s.headerContacts}>
        <div className={s.headerContacts_item}>
          <Point />
          <span>
            <strong>г. Кокчетав, ул. Ж. Ташенова 129Б </strong>(Рынок Восточный)
          </span>
        </div>
        <div className={s.headerContacts_item}>
          <Mail />
          <span>
            <strong>opt.sultan@mail.ru</strong>
            <br /> На связи в любое время
          </span>
        </div>
      </div>
      <MenuHeader />
    </div>
  );
};

export default Header;
