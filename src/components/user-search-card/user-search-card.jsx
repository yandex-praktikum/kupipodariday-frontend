import React from "react";
import { Button } from "../ui/button/button";
import styles from "./user-search-card.module.css";

export const UserSearchCard = ({
  name = "",
  login = "",
  img,
  extraClass = "",
}) => {
  return (
    <article className={`${styles.content} ${extraClass}`}>
      <img className={styles.img} src={img} alt="Аватар." />
      <div className={`ml-10 ${styles.data_box}`}>
        <h2 className="text text_type_h2 text_color_primary mb-2">{name}</h2>
        <p className={`text text_type_main text_color_primary ${styles.login}`}>
          {login}
        </p>
      </div>
      <Button
        text="Перейти на страницу"
        type="button"
        kind="additional"
        extraClass={styles.btn}
      />
    </article>
  );
};
