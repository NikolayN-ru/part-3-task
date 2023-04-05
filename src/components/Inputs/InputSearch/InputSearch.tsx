import Search from "../../Icons/Search";
import s from "./InputSearch.module.scss";

const InputSearch = () => {
  return (
    <div className={s.wrapper}>
      <input className={s.inputSearch} placeholder="Поиск..." />
      <div className={s.search}><Search /></div>
    </div>
  );
};

export default InputSearch;
