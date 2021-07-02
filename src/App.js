import './App.css';
import React, { useEffect } from "react";
import { productService, userService } from "./services";
import { BaseLayout } from "./layouts";
import { Home } from "./views";
import { LeftSideBar, MainBlock, ProductsList } from "./components/main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


function App() {
  const history = useHistory();
  return (
    <div className="main-wrapper">
      <BaseLayout>
        <Switch>
          <Route path="/" exact>
            <Home/>
            {/*<MainBlock>*/}
            {/*  <LeftSideBar/>*/}
            {/*  <ProductsList/>*/}
            {/*</MainBlock>*/}
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
