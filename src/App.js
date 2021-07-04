import './App.css';
import React from "react";
import { BaseLayout } from "./layouts";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { MainBlock, ProductDetails } from "./views";


function App() {
  const history = useHistory();
  return (
    <div className="main-wrapper">
      <BaseLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products"/>
          </Route>

          <Route path="/products" exact>
            <MainBlock/>
          </Route>

          <Route path="/products/:productId">
            <ProductDetails/>
          </Route>

          <Route>
            <h1 style={{flex: 1}}>PAGE NOT FOUND
              <button onClick={() => history.push('/')}>
                go home
              </button>
            </h1>
          </Route>
        </Switch>
      </BaseLayout>
    </div>
  );
}

export default App;
