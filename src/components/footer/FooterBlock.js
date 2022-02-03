import React from "react";
import styles from './FooterBlock.module.css';

export const FooterBlock = () => (
  <div className={styles.footer}>
    <div className={styles.footer_wrapper}>
      <div>Обратная связь</div>
      <div>График работы</div>
      <div>Условия оплаты и доставки</div>
    </div>
  </div>
);
