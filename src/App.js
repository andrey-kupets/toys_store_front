import './App.css';
import React, { useEffect } from "react";
import { productService, userService } from "./services";
import { BaseLayout } from "./layouts";
import { Home } from "./views";
import { LeftSideBar, MainBlock, ProductsList } from "./components/main";

function App() {
  // useEffect(() => {
  //   createUser();
  //   getUsers();
  //   getUserById("60d8f6b51127ae1df05ccf8f");
  //   getProducts();
  //   getProductById('60b231505d469ae5fefc2de8');
  // }, []);

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
