import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cartItemsApi";
import { RootState } from "../../redux/store";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import Header from "../Header/Header";
import MainPage from "../MainPage";
import s from "./Cartpage.module.scss";
import ItemCart from "./ItemCart/ItemCart";
import MainItem from "./ItemCart/MainItem/MainItem";

const CartPage = () => {
  const [state, setState] = useState<number>(0);
  const [submit, setSubmit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    let total = 0;
    items.forEach((element: any) => {
      total += element.count * element.regular_price.value;
    });
    setState(total);
  }, [items]);

  const order = () => {
    axios
      .post("https://app.aaccent.su/js/confirm.php", { name, phone })
      .then((res) => {
        // res.data ! CORS
      });
    setSubmit(true);
  };
  const submitFunc = () => {
    dispatch(clearCart());
    setSubmit(false);
  };

  console.log(items);
  return (
    <div>
      <Header />
      <ButtonHeader />
      <div className={s.wrap}>
        <h1>Корзина</h1>
        <div className={s.items}>
          {items &&
            items.map((item: any, id: number) => {
              return <MainItem key={id} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
