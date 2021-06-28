import React from "react";
import { HeaderBlock } from "../components/header/HeaderBlock";
import { MainBlock } from "../components/main/MainBlock";
import { FooterBlock } from "../components/footer/FooterBlock";

export const BaseLayout = ({ children }) => {
  return (
    <div className="main-wrapper">
      <HeaderBlock/>
        { children }
      <MainBlock/>
      <FooterBlock/>
    </div>
  );
};
