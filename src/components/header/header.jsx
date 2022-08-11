import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../images/icons/logo.svg";
import giftIcon from "../../images/icons/gift.svg";
import likeIcon from "../../images/icons/like.svg";
import profileIcon from "../../images/icons/profile.svg";
import { Button } from "../ui/button/button";
import { UserContext } from "../../utils/context";
import { Modal } from "../ui/modal/modal";
import { Input } from "../ui/input/input";
import styles from "./header.module.css";

export const Header = ({ extraClass = "" }) => {
  const [user] = React.useContext(UserContext);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isGiftPopupOpen, setIsGiftPopupOpen] = React.useState(false);

  const history = useHistory();

  const onSubmit = () => {
    if (user.id) {
      handleGiftPopupOpen();
    } else {
      history.push("/signin");
    }
  };

  const handleProfilePopupOpen = () => {
    setIsProfilePopupOpen(true);
  };

  const handleGiftPopupOpen = () => {
    setIsGiftPopupOpen(true);
  };

  const handlePopupClose = () => {
    isProfilePopupOpen && setIsProfilePopupOpen(false);
    isGiftPopupOpen && setIsGiftPopupOpen(false);
  };

  return (
    <header className={`${styles.header} ${extraClass}`}>
      <NavLink className={styles.nav} to="/">
        <img className={styles.logo} src={logo} alt="Логотип." />
      </NavLink>
      {user.id && (
        <ul className={styles.nav_box}>
          <li className={styles.nav_link}>
            <NavLink className={styles.nav} to="/gifts/line">
              <img src={giftIcon} alt="Иконка подарков." />
              <p className="text text_type-main text_color_primary ml-3">
                Подарки
              </p>
            </NavLink>
          </li>
          <li className={styles.nav_link}>
            <NavLink className={styles.nav} to="/wishlist">
              <img src={likeIcon} alt="Иконка лайка." />
              <p className="text text_type-main text_color_primary ml-3">
                Мой вишлист
              </p>
            </NavLink>
          </li>
          <li className={styles.nav_link}>
            <button className={styles.nav} onClick={handleProfilePopupOpen}>
              <img src={profileIcon} alt="Иконка профиля." />
              <p className="text text_type_main text_color_primary ml-3">
                Профиль
              </p>
            </button>
          </li>
        </ul>
      )}
      <Button
        type="button"
        kind="primary"
        text={`${user.id ? "Добавить подарок" : "Войти в профиль"}`}
        onClick={onSubmit}
      />
      {isProfilePopupOpen && (
        <Modal onClose={handlePopupClose} extraClass={styles.modal}>
          <div className={styles.popup}>
            <button
              className={`text text_type_button text_color_primary ${styles.popup_btn} ${styles.logout}`}
              type="button"
            >
              Выйти из профиля
            </button>
            <div className={styles.line} />
            <NavLink
              to="/profile"
              className={`text text_type_button text_color_primary ${styles.popup_btn} ${styles.edit}`}
              onClick={handlePopupClose}
            >
              Редактировать профиль
            </NavLink>
          </div>
        </Modal>
      )}
      {isGiftPopupOpen && (
        <Modal
          onClose={handlePopupClose}
          extraClass={styles.gift_modal}
          isCloseBtn={true}
        >
          <form className={styles.gift_form}>
            <h2 className="text text_type_h2 mb-16">Добавить подарок</h2>
            <Input
              type="text"
              id={20}
              extraClass="mb-12"
              label="Название подарка"
              placeholder="Укажите название подарка"
            />
            <Input
              type="url"
              id={21}
              extraClass="mb-12"
              label="Ссылка на магазин"
              placeholder="Укажите ссылку"
            />
            <Input
              type="url"
              id={22}
              extraClass="mb-12"
              label="Ссылка на изображение подарка"
              placeholder="Укажите ссылку"
            />
            <Input
              type="number"
              id={23}
              extraClass={`mb-16 ${styles.price_input}`}
              label="Стоимость подарка (руб.)"
              placeholder="Укажите стоимость"
            />
            <Button
              type="button"
              extraClass={styles.gift_btn}
              text="Добавить подарок"
              kind="secondary"
            />
          </form>
        </Modal>
      )}
    </header>
  );
};
