import React from "react";

const ContactsHeader = () => {
  return (
    <div className="flex gap-10 items-center">
      <div>
        <p className="font-bold text-base leading-150%">+7 (777) 490-00-91</p>
        <p className="font-thin text-sm">время работы: 9:00-20:00</p>
        <p className="font-normal text-xs leading-6 underline">Заказать звонок</p>
      </div>
      <div>
        <img src="callme.png" alt="callme" />
      </div>
    </div>
  );
};

export default ContactsHeader;
