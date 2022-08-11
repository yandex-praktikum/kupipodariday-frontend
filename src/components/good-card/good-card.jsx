import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button/button";
import { LoadingBox } from "../ui/loading-box/loading-box";
import styles from "./good-card.module.css";

export const GoodCard = ({
  id,
  isLogin = false,
  price = 0,
  name = "",
  current,
  total,
  img,
  onClick,
  extraClass = "",
}) => {
  return (
    <article
      id={id}
      className={`${styles.content} ${extraClass}`}
      onClick={onClick}
    >
      <Link to={`/gift/1`} className={styles.img_box}>
        <img className={styles.img} src={img} alt="Фото товара." />
      </Link>
      <div className={styles.data_box}>
        <p
          className={`text text_type_h1 text_color_primary mb-4 ${styles.price}`}
        >
          {`${price} руб.`}
        </p>
        <p
          className={`text text_type_main text_color_primary mb-10 ${styles.name}`}
        >
          {name}
        </p>
        <LoadingBox current={current} total={total} />
        {isLogin && (
          <Button
            extraClass={styles.btn}
            text="Добавить в вишлист"
            type="button"
            kind="additional"
          />
        )}
      </div>
    </article>
  );
};
