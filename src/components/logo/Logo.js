import React from "react";
import { imagesEnum } from '../../constants';
import styles from './Logo.module.css';

export const Logo = () => (
  <div>
    <img className={styles.logo} src={imagesEnum.LOGO_1} alt="logo"/>
  </div>
);
