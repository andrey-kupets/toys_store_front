import React from "react";
import styles from './Main.module.css';

export const MainBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main_wrapper}>
                <div className={styles.left_sideBar}>Left SideBar-Filter</div>
                <div className={styles.product_container}>Products Container</div>
            </div>
        </div>
    )
}
