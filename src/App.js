import './App.css';
import React, { useEffect } from "react";
import { productService, userService } from "./services";
import { BaseLayout } from "./layouts";
import { Home } from "./views";
import { LeftSideBar, MainBlock, ProductsList } from "./components/main";

function App() {
  return (
    <div className="main-wrapper">
      <BaseLayout>
        <Home/>
        {/*<MainBlock>*/}
        {/*  <LeftSideBar/>*/}
        {/*  <ProductsList/>*/}
        {/*</MainBlock>*/}
      </BaseLayout>
    </div>
  );
}

export default App;
