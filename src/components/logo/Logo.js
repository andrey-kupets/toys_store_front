import React from "react";
import { constants } from '../../constants';
import styles from './Logo.module.css';

export const Logo = () => ( // early return pattern
  <div>
    <img className={styles.logo} src={constants.LOGO_1} alt="logo"/>
  </div>
);
