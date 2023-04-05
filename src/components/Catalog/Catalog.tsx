import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "../Item/Item";
import s from "./Catalog.module.scss";

const Catalog = () => {
  // const [state, setState] = useState<[]>([]);
  const products = useSelector((state: any) => state.counter.products);
  
  const items = useSelector((state:any) => state.counter);
  // console.log(items)

  // useEffect(() => {
    // setState(items);
  // }, []);
  
  return (
    <div className={s.wrap}>
      <p>Акционные<span>товары</span></p>
      <div className={s.wrapItems}>
        {products && products.map((item:any) =><Item key={item.id} {...item}/>)}
        {/* <Item /> */}
        {/* <Item /> */}
      </div>
    </div>
  );
};

export default Catalog;
