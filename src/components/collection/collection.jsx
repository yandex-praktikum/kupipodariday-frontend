import React from "react";
import { useParams } from "react-router-dom";
import styles from "./collection.module.css";
import { Button } from "../ui/button/button";
import { UserContext } from "../../utils/context";
import { GoodCard } from "../good-card/good-card";

export const Collection = ({ extraClass = "" }) => {
  const [user] = React.useContext(UserContext);
  // const [cards, setCards] = React.useState([]);
  // const [pagData, setPagData] = React.useState({});

  const { id } = useParams();

  return (
    <div className={`${styles.content} ${extraClass}`}>
      <section className={styles.box}>
        <h2 className="text text_type_h2 text_color_primary mb-16">
          Стартерпак фашионисты
        </h2>
        <div className={styles.cards_box}>
          <GoodCard
            isLogin={!!user.id}
            price={670}
            name="Одеялко-лаваш"
            curren={320}
            total={1000}
          />
          <GoodCard
            isLogin={!!user.id}
            price={670}
            name="Одеялко-лаваш"
            curren={320}
            total={1000}
          />
          <GoodCard
            isLogin={!!user.id}
            price={670}
            name="Одеялко-лаваш"
            curren={320}
            total={1000}
          />
          <GoodCard
            isLogin={!!user.id}
            price={670}
            name="Одеялко-лаваш"
            curren={320}
            total={1000}
          />
          <GoodCard
            isLogin={!!user.id}
            price={670}
            name="Одеялко-лаваш"
            curren={320}
            total={1000}
          />
        </div>
        <Button
          extraClass={styles.btn}
          type="button"
          kind="secondary"
          text="Загрузить ещё"
        />
      </section>
    </div>
  );
};
