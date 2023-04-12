import { useSelector } from "react-redux";
import Item from "../Item/Item";
import s from "./Catalog.module.scss";

const Catalog = () => {
  const products = useSelector((state: any) => state.counter.products);
  return (
    <div className={s.wrap}>
      <p>
        Акционные<span>товары</span>
      </p>
      <div className={s.wrapItems}>
        {products &&
          products.map((item: any) => <Item key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Catalog;
