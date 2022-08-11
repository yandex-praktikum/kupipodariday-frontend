import React from "react";
import styles from "./search-page.module.css";
import { UserSearchCard } from "../user-search-card/user-search-card";
import { makeRightDeclension } from "../../utils/constants";

export const SearchPage = ({ query, extraClass = "" }) => {
  const count = 11;
  const resultsArr = ["результат", "результата", "результатов"];

  return (
    <section className={`${styles.content} ${extraClass}`}>
      <h1 className={`text text_type_h1 text_color_primary ${styles.title}`}>
        {`Результаты поиска "${query}"`}
      </h1>
      <h2
        className={`text text_type_h2 text_color_primary mb-16 ${styles.description}`}
      >
        {`${count} ${makeRightDeclension(count, resultsArr)}`}
      </h2>
      <div className={styles.cards_box}>
        <UserSearchCard name="Emily Ullrich" login="@Login_username" />
        <UserSearchCard name="Emily Ullrich" login="@Login_username" />
        <UserSearchCard name="Emily Ullrich" login="@Login_username" />
        <UserSearchCard name="Emily Ullrich" login="@Login_username" />
        <UserSearchCard name="Emily Ullrich" login="@Login_username" />
      </div>
    </section>
  );
};
