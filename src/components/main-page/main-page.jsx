import React from "react";
import {
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import styles from "./main-page.module.css";
import { Button } from "../ui/button/button";
import { UserContext } from "../../utils/context";
import { GoodCard } from "../good-card/good-card";
import { NavLink } from "react-router-dom";
import { Collection } from "../collection/collection";
import { ButtonReturn } from "../ui/button-return/button-return";

export const MainPage = ({ extraClass = "" }) => {
  const [user] = React.useContext(UserContext);
  // const [cards, setCards] = React.useState([]);
  // const [pagData, setPagData] = React.useState({});

  const { path, url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const onTabsClick = (e) => {
    history.push(`/gifts/${e.target.name ?? e.target.closest("button").name}`);
  };

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
    <div className={`${styles.content} ${extraClass}`}>
      <div className={styles.tabs_box}>
        <Route path={`${path}/collections/:id`}>
          <ButtonReturn />
        </Route>
        <h1
          className={`text text_type_h1 text_color_primary mb-16 ${styles.title}`}
        >
          Подарки
        </h1>
        <div className={styles.tabs}>
          <Button
            kind="secondary"
            type="button"
            name="line"
            text="Лента"
            extraClass={`${
              location.pathname.includes("/gifts/collections")
                ? styles.inactive
                : styles.shadow
            }`}
            onClick={onTabsClick}
            disabled={location.pathname === "/gifts/line"}
          />
          <Button
            kind="secondary"
            type="button"
            name="collections"
            text="Коллекции"
            extraClass={`${styles.right_btn} ${
              location.pathname === "/gifts/line"
                ? styles.inactive
                : styles.shadow
            }`}
            onClick={onTabsClick}
            disabled={
              location.pathname.includes("/gifts/collections") || !user.id
            }
          />
        </div>
      </div>
      <Route path={`${path}/line`}>
        <section className={styles.box}>
          <h2 className="text text_type_h2 text_color_primary mb-16">
            Недавно добавленные
          </h2>
          <div className={styles.cards_box}>
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
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
        <section className={styles.box}>
          <h2 className="text text_type_h2 text_color_primary mb-16">
            Популярные
          </h2>
          <div className={styles.cards_box}>
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
              total={1000}
            />
            <GoodCard
              isLogin={!!user.id}
              price={670}
              name="Одеялко-лаваш"
              current={320}
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
      </Route>
      <Route exact path={`${path}/collections`}>
        <section className={styles.collection_box}>
          <NavLink
            className={`${styles.card} ${styles.fashion}`}
            to={`${url}/collections/1`}
          >
            <h3
              className={`text text_type_cardh3 text_color_secondary ${styles.text}`}
            >
              Стартерпак фэшонисты
            </h3>
          </NavLink>
          <NavLink
            className={`${styles.card} ${styles.witches}`}
            to={`${url}/collections/2`}
          >
            <h3
              className={`text text_type_cardh3 text_color_secondary ${styles.text}`}
            >
              Стартерпак современной ведьмы
            </h3>
          </NavLink>
          <NavLink
            className={`${styles.card} ${styles.director}`}
            to={`${url}/collections/3`}
          >
            <h3
              className={`text text_type_cardh3 text_color_secondary ${styles.text}`}
            >
              Стартерпак директора всего
            </h3>
          </NavLink>
          <NavLink
            className={`${styles.card} ${styles.home}`}
            to={`${url}/collections/4`}
          >
            <h3
              className={`text text_type_cardh3 text_color_secondary ${styles.text}`}
            >
              Стартерпак домоседа
            </h3>
          </NavLink>
          <NavLink
            className={`${styles.card} ${styles.music}`}
            to={`${url}/collections/5`}
          >
            <h3
              className={`text text_type_cardh3 text_color_secondary ${styles.text}`}
            >
              Стартерпак музыкального задрота
            </h3>
          </NavLink>
          <NavLink
            className={`${styles.card} ${styles.minimal}`}
            to={`${url}/collections/6`}
          >
            <h3
              className={`text text_type_cardh3 text_color_secondary ${styles.text}`}
            >
              Стартерпак минималиста
            </h3>
          </NavLink>
        </section>
      </Route>
      <Route path={`${path}/collections/:id`}>
        <Collection />
      </Route>
    </div>
  );
};
