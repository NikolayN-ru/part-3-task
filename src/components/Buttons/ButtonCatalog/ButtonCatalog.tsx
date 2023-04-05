import Cubics from "../../Icons/Cubics";
import s from "./ButtonCatalog.module.scss";

const ButtonCatalog = () => {
  return (
    <button className={s.button}>
      <span className="pr-12 pt-0">Каталог</span>
      <Cubics />
    </button>
  );
};

export default ButtonCatalog;
