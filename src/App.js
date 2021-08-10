import './App.css';
import React from "react";
import { BaseLayout } from "./layouts";
import { Redirect, Route, Switch } from "react-router-dom";
import { MainBlock, ProductDetails } from "./views";
import { PageNotFound } from "./views/page_not_found";
import { Login } from "./views/login";
import { Registration } from "./views/registration";
import { Cart } from "./components/cart";
import { Wishlist } from "./components/wishlist";

function App() {
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
