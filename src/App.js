import './App.css';
import React from "react";
import { BaseLayout } from "./layouts";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { MainBlock, ProductDetails } from "./views";
import { PageNotFound } from "./views/page_not_found";
import { Login } from "./views/login";
import { Registration } from "./views/registration";


function App() {
  const history = useHistory();
  return (
    <div className="main-wrapper">
      <BaseLayout>
        <Switch>
          {/*<Route path="/" exact>*/}
          {/*  <Redirect to="/products"/>*/}
          {/*</Route>*/}

          <Route path={["/", "/products"]} exact>
            <Redirect to="/products?page=1"/>
            <MainBlock/>
          </Route>

          <Route path="/products/:productId">
            <ProductDetails/>
          </Route>

          <Route path="/auth">
            <Login/>
          </Route>

          <Route path="/users">
            <Registration/>
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
