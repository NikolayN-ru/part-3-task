import { FC } from "react";
import { useDispatch } from "react-redux";
import { delItemCart } from "../../../../redux/cartItemsApi";
import s from "./MainItem.module.scss";

const MainItem: FC<any> = ({
  id,
  image,
  count,
  title,
  type,
  regular_price,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrap}>
      <img src={image} alt="sort" />
      <div className={s.description}>
        <div className={s.size}>450 мл</div>
        <div className={s.title}>{title}</div>
        <div className={s.title_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
          vulputate feugiat massa vestibulum duis.
        </div>
      </div>
      <div className={s.count}>
        <button>+</button>
        <p>1</p>
        <button>-</button>
      </div>
      <div className={s.price}>{regular_price.value}₸</div>
      <div className={s.delete} onClick={() => dispatch(delItemCart(id))}>
        X
      </div>
    </div>
  );
};

export default MainItem;
