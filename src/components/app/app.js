import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styles from "./app.module.css";
import { UserContext } from "../../utils/context";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { GoodCard } from "../good-card/good-card";
import { Message } from "../ui/message/message";
import { UserSearchCard } from "../user-search-card/user-search-card";
import { SearchBox } from "../search-box/search-box";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { SignIn } from "../sign-in/sign-in";
import { SignUp } from "../sign-up/sign-up";
import { RecoveryPassword } from "../recovery-password/recovery-password";
import { MainPage } from "../main-page/main-page";
import { ProfilePage } from "../profile-page/profile-page";
import { UserPage } from "../user-page/user-page";
import { SearchPage } from "../search-page/search-page";
import { WishlistPage } from "../wishlist-page/wishlist-page";
import { GiftPage } from "../gift-page/gift-page";

function App() {
  const [userState, setUserState] = React.useState({ id1: 1});
  const [search, setSearch] = React.useState("");

  return (
    <div className={styles.app}>
      <UserContext.Provider value={[userState, setUserState]}>
        <BrowserRouter>
          <Header />
          <main className={styles.content}>
            {userState.id && (
              <SearchBox
                search={search}
                setSearch={setSearch}
                extraClass={styles.search}
              />
            )}
            <Switch>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/recovery">
                <RecoveryPassword />
              </Route>
              <Route path="/gifts">
                <MainPage />
              </Route>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/users/:id">
                <UserPage />
              </Route>
              <Route path="/search">
                <SearchPage query={search} />
              </Route>
              <Route path="/wishlist">
                <WishlistPage />
              </Route>
              <Route path="/gift/:id">
                <GiftPage />
              </Route>
              <Redirect from="/" to="/gifts/line" />
              {/* <Route path="/collection/:id">
                <Collection />
              </Route> */}
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
