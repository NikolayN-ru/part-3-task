import s from './MenuHeader.module.scss';

const MenuHeader = () => {
  return (
    <ul className={s.wrapper}>
        <li>О компании</li>
        <li>Доставка и оплата</li>
        <li>Возврат</li>
        <li>Контакты</li>
    </ul>
  )
}

export default MenuHeader