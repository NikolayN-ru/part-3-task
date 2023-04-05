import s from "./ItemSee.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addItemCart } from "../../redux/cartItemsApi";
import Header from "../Header/Header";
import MainPage from "../MainPage";
import ButtonHeader from "../ButtonHeader/ButtonHeader";

const ItemSee = () => {
  const [state, setState] = useState<any>([]);
  const [count, setCount] = useState<number>(1);

  let { id } = useParams();
  const dispatch = useDispatch();

  const items = useSelector((state: any) => state.counter.products);

  useEffect(() => {
    const condidate = items.filter((item: any) => item.id == id);
    setState(condidate);
  }, []);

  const addCart = () => {
    dispatch(addItemCart({ ...state[0], count: count }));
  };

  return (
    <div>
      <Header />
      <MainPage />
      <ButtonHeader />
      <div className={s.wrap}>
        <div className={s.left}>
          <img src={state[0] && state[0].image} />
        </div>
        <div className={s.right}>
          <div className={s.avalible}>В наличии</div>
          <div className={s.title}>{state[0] && state[0].title}</div>
          <div className={s.cuality}>90_г</div>
          <div className={s.main}>
            <div className={s.price}>48,76_₸</div>
            <div className={s.total}>
              <button onClick={() => setCount((prev) => (prev -= 1))}>-</button>
              <p>{count}</p>
              <button onClick={() => setCount((prev) => (prev += 1))}>+</button>
            </div>
            <div className={s.main_cart} onClick={() => addCart()}>
              В корзину
            </div>
          </div>
          <div className={s.right_description}>
            <p>
              Производитель: <span>BioMio</span>
            </p>
            <p>
              Бренд: <span>BioMio</span>
            </p>
            <p>
              Артикул: <span>460404</span>
            </p>
            <p>
              Штрихкод: <span>4604049097548</span>
            </p>
          </div>
          <div className={s.right_description_main}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
              mattis vulputate feugiat massa vestibulum duis. Faucibus
              consectetur aliquet sed pellentesque consequat consectetur congue
              mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
              malesuada.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSee;
