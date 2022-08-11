import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./sign-in.module.css";
import { Input } from "../ui/input/input";
import { NavLink } from "react-router-dom";
import { getUser, loginUser } from "../../utils/api";
import { UserContext } from "../../utils/context";
import { Button } from "../ui/button/button";

export const SignIn = ({ extraClass = "" }) => {
  const [userData, setUserData] = React.useState({});
  const [user, setUser] = React.useContext(UserContext);

  const history = useHistory();

  const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    loginUser(userData.username, userData.password).then((res) => {
      if (res && res.auth_token) {
        getUser().then((res) => {
          if (res && res.id) {
            setUserData({ id: res.id });
            history.replace({ pathname: "/" });
          }
        });
      }
    });
  };

  return (
    <div className={`${styles.content} ${extraClass}`}>
      <h2
        className={`text text_type_h2 text_color_primary mb-16 ${styles.title}`}
      >
        Вход
      </h2>
      <form className={styles.form}>
        <Input
          name="email"
          type="email"
          id={1}
          placeholder="Введите тут"
          label="E-mail"
          onChange={onChangeInput}
          extraClass="mb-16"
        />
        <Input
          name="password"
          type="password"
          id={2}
          placeholder="Введите пароль"
          label="Пароль"
          onChange={onChangeInput}
        />
        <Button
          type="button"
          kind="secondary"
          text="Войти"
          extraClass={styles.btn}
        />
      </form>
      <div className={styles.links_box}>
        <p
          className={`text text_type_main text_color_primary mb-9 ${styles.text}`}
        >
          Вы — новый пользователь?
        </p>
        <NavLink
          to="/signup"
          className={`text text_type_button text_color_primary ${styles.nav}`}
        >
          Зарегистрироваться
        </NavLink>
      </div>
      <div className={styles.links_box}>
        <p className={`text text_type_main text_color_primary ${styles.text}`}>
          Забыли пароль?
        </p>
        <NavLink
          to="/recovery"
          className={`text text_type_button text_color_primary ${styles.nav}`}
        >
          Восстановить пароль
        </NavLink>
      </div>
    </div>
  );
};
