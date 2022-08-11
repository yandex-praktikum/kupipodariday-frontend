import React from "react";
import { ButtonReturn } from "../ui/button-return/button-return";
import giftImg from "../../images/gift.jpg";
import { NavLink } from "react-router-dom";
import { makeRightDeclension, priceArr } from "../../utils/constants";
import { LoadingBox } from "../ui/loading-box/loading-box";
import { Button } from "../ui/button/button";
import { UserSupportedCard } from "../user-supported-card/user-supported-card";
import styles from "./gift-page.module.css";
import { Modal } from "../ui/modal/modal";
import { Input } from "../ui/input/input";

export const GiftPage = ({ extraClass = "" }) => {
  const [supportedAmountData, setSupportedAmountData] = React.useState({
    current: 10,
    total: 16,
  });
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [currentSupportedBtn, setCurrentSupportedBtn] = React.useState(100);
  const [anotherSum, setAnotherSum] = React.useState(0);

  const daysArr = ["день", "дня", "дней"];

  const data = {
    name: "Толстовка для собаки",
    img: giftImg,
    price: 700,
    link: "",
    owner: "Clara Zieme",
    current: 320,
    total: 1000,
    days: 10,
    supported: [
      {
        name: "Clara",
        amount: 300,
        date: "2 дня назад",
      },
      {
        name: "Clara",
        amount: 300,
        date: "2 дня назад",
      },
      {
        name: "Clara",
        amount: 300,
        date: "2 дня назад",
      },
      {
        name: "Clara",
        amount: 300,
        date: "2 дня назад",
      },
      {
        name: "Clara",
        amount: 300,
        date: "2 дня назад",
      },
    ],
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleSupportedBtnsClick = (e) => {
    const currentId = e.target.closest("button").getAttribute("id");
    setCurrentSupportedBtn(+currentId);
  };

  const handleChangeInput = (e) => {
    setAnotherSum(e.target.value);
  };

  return (
    <section className={`${styles.content} ${extraClass}`}>
      <ButtonReturn />
      <h1 className="text text_type_h1 mb-16">{data.name}</h1>
      <div className={styles.data_box}>
        <img className={styles.img} src={data.img} alt="Фото подарка." />
        <div className={styles.gift_data}>
          <h2 className="text text_type_h1 mb-16">{`${data.price} руб.`}</h2>
          <a
            className={`text text_type_link text_color_primary mb-4 ${styles.link}`}
            href={data.link}
            target="_blank"
            rel="noreferrer"
          >
            Ссылка на сайт
          </a>
          <p className="text text_type_main">
            {`Добавлено ${data.days} ${makeRightDeclension(
              data.days,
              daysArr
            )} назад пользователем `}
            <NavLink
              to="/user/1"
              className={`text text_type_main text_color_primary ${styles.link}`}
            >
              {`${data.owner} ${"\u{2197}"}`}
            </NavLink>
          </p>
          <LoadingBox
            current={data.current}
            total={data.total}
            extraClass={styles.load}
          />
          <div className={styles.btns_box}>
            <Button
              type="button"
              kind="secondary"
              text="Поддержать"
              extraClass={styles.btn}
              onClick={handlePopupOpen}
            />
            <Button
              type="button"
              kind="support"
              text="Добавить в вишлист"
              extraClass={styles.btn}
            />
          </div>
        </div>
      </div>
      <div className={styles.supported_box}>
        <div className={styles.subtitle_box}>
          <h2 className="text text_ty-e_h2">Список поддержавших</h2>
          <p className="text text_type_main">{`${supportedAmountData.current} из ${supportedAmountData.total} отображается`}</p>
        </div>
        <UserSupportedCard name="Clara Zieme" amount={300} date="2 дня назад" />
        <UserSupportedCard name="Clara Zieme" amount={300} date="2 дня назад" />
        <UserSupportedCard name="Clara Zieme" amount={300} date="2 дня назад" />
        <UserSupportedCard name="Clara Zieme" amount={300} date="2 дня назад" />
        <UserSupportedCard name="Clara Zieme" amount={300} date="2 дня назад" />
        <UserSupportedCard name="Clara Zieme" amount={300} date="2 дня назад" />
        <UserSupportedCard name="Clara Zieme" amount={300} date="2 дня назад" />
      </div>
      <Button
        type="button"
        extraClass={styles.load_btn}
        text="Загрузить ещё"
        kind="secondary"
      />
      {isPopupOpen && (
        <Modal
          onClose={handlePopupClose}
          extraClass={styles.modal}
          isCloseBtn={true}
        >
          <div className={styles.popup}>
            <h2 className="text text_type_h2 mb-20">Поддержите любой суммой</h2>
            <div className={`mb-20 ${styles.gift_btns_box}`}>
              {priceArr.map((item, index) => {
                return (
                  <Button
                    key={index}
                    id={item}
                    type="button"
                    extraClass={styles.price_btn}
                    text={`${item} руб`}
                    kind={
                      currentSupportedBtn === item && !anotherSum
                        ? "primary"
                        : "support"
                    }
                    onClick={handleSupportedBtnsClick}
                  />
                );
              })}
              <Input
                type="number"
                extraInputClass={styles.price_input}
                placeholder="Другая сумма"
                onChange={handleChangeInput}
              />
            </div>
            <Button
              type="button"
              kind="secondary"
              text="Поддержать"
              extraClass={styles.supported_btn}
            />
            <p className="text text_type_small mt-8">
              Нажимая кнопку “Поддержать” вы соглашаетесь с условиями оферты,
              политики в отношении обработки и защиты персональных данных и
              даете согласие на обработку своих персональных данных
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};
