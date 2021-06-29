import React from "react";
import {MainBlock} from "../components/main/MainBlock";
import {LeftSideBar, ProductsList} from "../components/main";

export const Home = () => {
  return (
    // <div>
      <MainBlock>
        <LeftSideBar/>
        <ProductsList/>
      </MainBlock>
      // from home
    // </div>
  );
}
