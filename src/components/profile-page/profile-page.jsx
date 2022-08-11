import React from "react";
import styles from "./profile-page.module.css";
import { Button } from "../ui/button/button";
import { UserContext } from "../../utils/context";
import { Input } from "../ui/input/input";
import { Textarea } from "../ui/textarea/textarea";

export const ProfilePage = ({ extraClass = "" }) => {
  const [user] = React.useContext(UserContext);
  const [userData, setUserData] = React.useState({ description: "" });
  const [currentFileName, setCurrentFileName] = React.useState("123.jpeg");
  // const [cards, setCards] = React.useState([]);
  // const [pagData, setPagData] = React.useState({});

  // React.useEffect(() => {
  //   getCards(queryPage).then((res) => {
  //     setPagData({
  //       count: res.count,
  //       pages: Math.ceil(res.count / 10),
  //     });
  //     setCards(res.results);
  //   });
  // }, [queryPage]);

  const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    e.target.name === "image" && setCurrentFileName(e.target.value);
  };

  return (
    <section className={`${styles.content} ${extraClass}`}>
      <h1 className={`text text_type_h1 text_color_primary ${styles.title}`}>
        Профиль
      </h1>
      <h2 className={`text text_type_h2 text_color_primary mb-20`}>
        Личная информация
      </h2>
      <form className={styles.form}>
        <p
          className={`text text_type_main text_color_black mb-8 ${styles.avatar_text}`}
        >
          Аватар
        </p>
        <label htmlFor="image" className={styles.img_box}>
          <div className={styles.avatar}>
            <img className={styles.img} src={user.image} alt="Аватар." />
          </div>
          <div className={`text text_type_main ${styles.file_input}`}>
            {currentFileName || "123.jpeg"}
          </div>
        </label>
        <input
          type="file"
          className={styles.file_input_hidden}
          name="image"
          id="image"
          onChange={onChangeInput}
        />
        <p className={`text text_type_small mt-4 mb-12 ${styles.caption}`}>
          допустимые форматы: jpeg, png
        </p>
        <Input
          name="name"
          type="name"
          id={2}
          placeholder="Имя"
          label="Полное имя"
          onChange={onChangeInput}
          extraClass="mb-12"
          defaultValue={user.name}
        />
        <Textarea
          name="description"
          type="description"
          id={3}
          placeholder="Несколько предложений о себе"
          label="О себе"
          onChange={onChangeInput}
          maxLength={170}
          defaultValue={user.description}
        />
        <p className={`text text_type_small mt-4 mb-16 ${styles.caption}`}>
          {`${userData.description.length}/170 символов`}
        </p>
        <Button
          type="button"
          kind="secondary"
          text="Сохранить изменения"
          extraClass={styles.btn}
        />
        <h2
          className={`text text_type_h2 text_color_primary mb-16 ${styles.h2}`}
        >
          Личная информация
        </h2>
        <Input
          name="email"
          type="email"
          id={4}
          placeholder="Укажите тут"
          label="E-mail"
          onChange={onChangeInput}
          extraClass="mb-12"
          defaultValue={user.email}
        />
        <Input
          name="text"
          type="text"
          id={5}
          placeholder="Профиль"
          label="Ссылка на профиль"
          onChange={onChangeInput}
          extraClass="mb-16"
          defaultValue={user.profile}
        />
        <Button
          type="button"
          kind="secondary"
          text="Сохранить изменения"
          extraClass={styles.btn}
        />
      </form>
    </section>
  );
};
