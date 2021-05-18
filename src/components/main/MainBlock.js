import React from "react";
import styles from './Main.module.css';
import {LeftSideBar} from "./LeftSideBar";
import {ProductsContainer} from "./ProductsContainer";

export const MainBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main_wrapper}>
                <LeftSideBar className={styles.left_sideBar}/>
                {/*<div className={styles.left_sideBar}>Left SideBar-Filter</div>*/}
                <ProductsContainer className={styles.products_container}/>
                {/*<div>Products Container</div>*/}
            </div>
        </div>
    )
}
