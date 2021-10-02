import './App.css';
import React, { useEffect } from "react";
import { BaseLayout } from "./layouts";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { MainBlock, ProductDetails } from "./views";
import { PageNotFound } from "./views";
import { Login } from "./views";
import { Registration } from "./views";
import { Cart } from "./views";
import { Wishlist } from "./views";
import { checkAuth } from "./funtion-helpers";
import { userService } from "./services";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { language } = useSelector(({ language }) => language);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(async () => {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    !!access_token && checkAuth(await userService.getUserById, language, history, dispatch);
  }, [])
  return (
    <div className="main-wrapper">
      <BaseLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products"/>
          </Route>

          {/*<Route path={["/", "/products"]} exact>*/}
          <Route path={"/products"} exact>
            {/*<Redirect to="/products?page=1"/>*/}
            <MainBlock/>
          </Route>

          <Route path="/products/:productId" exact>
            <ProductDetails/>
          </Route>

          <Route path="/auth">
            <Login/>
          </Route>

          <Route path="/users" exact>
            <Registration/>
          </Route>

          <Route path="/wishlist" exact>
            <Wishlist/>
          </Route>

          <Route path="/cart" exact>
            <Cart/>
          </Route>

          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
      </BaseLayout>
    </div>
  );
}

export default App;
