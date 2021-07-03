import './App.css';
import React from "react";
import { BaseLayout } from "./layouts";
import { MainBlock } from "./views";
import { Route, Switch, useHistory } from "react-router-dom";


function App() {
  const history = useHistory();
  return (
    <div className="main-wrapper">
      <BaseLayout>
        <Switch>
          <Route path="/" exact>
            <MainBlock/>
          </Route>

          <Route path="/products/:productId">
            <div style={{flex: 1}}
            >product details view</div>
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
