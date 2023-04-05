import ButtonCatalog from "../Buttons/ButtonCatalog/ButtonCatalog";
import ButtonPrice from "../Header/ButtonPrice/ButtonPrice";
import ContactsHeader from "../Header/ContactsHeader/ContactsHeader";
import Cart from "../Icons/Cart";
import Logo from "../Icons/Logo";
import InputSearch from "../Inputs/InputSearch/InputSearch";
import s from './ButtonHeader.module.scss';

const ButtonHeader = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center lg:space-x-10">
      <Logo />
      <ButtonCatalog />
      <InputSearch />
      <ContactsHeader />
      <ButtonPrice />
      <div className={s.count}>
        <Cart />
      </div>
    </div>
  );
};

export default ButtonHeader;
