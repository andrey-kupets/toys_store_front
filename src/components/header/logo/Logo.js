import React from "react";
import { constants } from '../../../constants/constants';
import styles from '../HeaderBlock.module.css';

export const Logo = () => ( // early return pattern
  <div>
    <img className={styles.logo} src={constants.LOGO_1} alt="logo"/>
  </div>
);
