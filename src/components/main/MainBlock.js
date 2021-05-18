import React from "react";
import styles from './Main.module.css';
import {LeftSideBar} from "./LeftSideBar";
import {ProductsContainer} from "./ProductsContainer";

export const MainBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main_wrapper}>
                <LeftSideBar className={styles.left_sideBar}/>
                <ProductsContainer className={styles.products_container}/>
            </div>
        </div>
    )
}
