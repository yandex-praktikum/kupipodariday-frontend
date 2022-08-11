import React from "react";
import styles from "./user-page.module.css";
import { ButtonReturn } from "../ui/button-return/button-return";
import { GoodCard } from "../good-card/good-card";

export const UserPage = ({ extraClass = "" }) => {
  const [userData, setUserData] = React.useState({});
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

  return (
    <section className={`${styles.content} ${extraClass}`}>
      <ButtonReturn />
      <h1
        className={`text text_type_h1 text_color_primary mb-16 ${styles.title}`}
      >
        {`${userData.name} (${userData.login})`}
      </h1>
      <p
        className={`text text_type_main text_color_primary mb-16 ${styles.description}`}
      >
        {userData.description}
      </p>
      <div className={styles.cards_box}>
        <GoodCard
          price={322}
          name="5 котов и гроб"
          current={322}
          total={1000}
        />
        <GoodCard
          price={322}
          name="5 котов и гроб"
          current={322}
          total={1000}
        />
        <GoodCard
          price={322}
          name="5 котов и гроб"
          current={322}
          total={1000}
        />
        <GoodCard
          price={322}
          name="5 котов и гроб"
          current={322}
          total={1000}
        />
        <GoodCard
          price={322}
          name="5 котов и гроб"
          current={322}
          total={1000}
        />
        <GoodCard
          price={322}
          name="5 котов и гроб"
          current={322}
          total={1000}
        />
      </div>
    </section>
  );
};
