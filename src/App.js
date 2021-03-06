import './App.css';
import React, { useEffect } from "react";
import { BaseLayout } from "./layouts";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import {
  Admin,
  Cart,
  Login,
  MainBlock,
  PageNotFound,
  ProductDetails,
  Register,
  Wishlist
} from "./views";
import { checkAuth } from "./funtion-helpers";
import { userService } from "./services";
import { useDispatch, useSelector } from "react-redux";
import { RegisterActivate } from "./views";

function App() {
  const { language } = useSelector(({ language }) => language);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(async () => {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    !!access_token && checkAuth(await userService.getUserById, language, history, dispatch);
  }, []);

  return (
    <div>
      <BaseLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products"/>
          </Route>

          <Route path={"/products"} exact>
            <MainBlock/>
          </Route>

          <Route path="/products/:productId" exact>
            <ProductDetails/>
          </Route>

          <Route path="/auth">
            <Login/>
          </Route>

          <Route path="/users" exact>
            <Register/>
          </Route>

          <Route path="/wishlist" exact>
            <Wishlist/>
          </Route>

          <Route path="/cart" exact>
            <Cart/>
          </Route>

          <Route path="/admin" exact>
            <Admin/>
          </Route>

          <Route path="/register/activate" exact>
            <RegisterActivate/>
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
