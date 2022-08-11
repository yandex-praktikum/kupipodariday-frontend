import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./sign-up.module.css";
import { Input } from "../ui/input/input";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button/button";
import { Textarea } from "../ui/textarea/textarea";
import avatarIcon from "../../images/icons/avatar.svg";
import { getUser, loginUser, registerUser, signu  } from "../../utils/api";

export const SignUp = ({ extraClass = "" }) => {
  const [userData, setUserData] = React.useState({});
  const [step, setStep] = React.useState(1);
  const [currentFileName, setCurrentFileName] = React.useState("");

  const history = useHistory();

  const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    e.target.name === "image" && setCurrentFileName(e.target.value);
  };

   const handleSubmit = async () => {
    if (step === 1) {
      setStep(2);
    } else {
      const user = await registerUser(userData);
      console.log(user);
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
    }
  };

  return (
    <div className={`${styles.content} ${extraClass}`}>
      <h2
        className={`text text_type_h2 text_color_primary mb-16 ${styles.title}`}
      >
        {`Регистрация ${step === 1 ? "1/2" : "2/2"}`}
      </h2>
      <form className={styles.form}>
        {step === 1 ? (
          <>
            <Input
              name="login"
              type="login"
              id={1}
              placeholder="Придумайте логин"
              label="Логин"
              onChange={onChangeInput}
              extraClass="mb-16"
            />
            <Input
              name="email"
              type="email"
              id={2}
              placeholder="Укажите тут"
              label="E-mail"
              onChange={onChangeInput}
              extraClass="mb-16"
            />
            <Input
              name="password"
              type="password"
              id={3}
              placeholder="Придумайте пароль"
              label="Пароль"
              onChange={onChangeInput}
            />
          </>
        ) : (
          <>
            <Input
              name="name"
              type="name"
              id={4}
              placeholder="Ваше имя"
              label="Имя"
              onChange={onChangeInput}
              extraClass="mb-16"
            />
            <Textarea
              name="description"
              type="description"
              id={5}
              placeholder="Расскажите о себе"
              label="О себе"
              onChange={onChangeInput}
              extraClass="mb-16"
            />
            <Input
              name="avatar"
              type="url"
              id={2}
              placeholder="Укажите тут ссылку на аватар"
              label="Аватар"
              onChange={onChangeInput}
              extraClass="mb-16"
            />
          </>
        )}
        <Button
          type="button"
          kind="secondary"
          text={`${step === 1 ? "Далее" : "Зарегистрироваться"}`}
          extraClass={styles.btn}
          onClick={handleSubmit}
        />
      </form>
      <div className={styles.links_box}>
        <p
          className={`text text_type_main text_color_primary mb-9 ${styles.text}`}
        >
          Уже зарегистрированы?
        </p>
        <NavLink
          to="/signin"
          className={`text text_type_button text_color_primary ${styles.nav}`}
        >
          Войти
        </NavLink>
      </div>
    </div>
  );
};
