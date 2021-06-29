import React from "react";
import styles from './BaseLayout.module.css';
import { HeaderBlock } from "../components/header";
import { FooterBlock } from "../components/footer";

export const BaseLayout = ({ children }) => {
  return (
    <div className={styles.main_wrapper}>
      <HeaderBlock/>
        { children }
      <FooterBlock/>
    </div>
  );
};
