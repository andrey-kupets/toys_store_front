import React from "react";
import styles from './Main.module.css';

export const LeftSideBar = () => {
    return (
        <div className={styles.left_sideBar}>
            <div className={styles.left_sideBar_category}>
                <h2>Категория</h2>
                <ul>
                    <li><a href="1">Игрушки для малышей</a></li>
                    <li><a href="1">Машинки и спецтехника</a></li>
                    <li><a href="1">Коляски и куклы</a></li>
                    <li><a href="1">Творчество</a></li>
                    <li><a href="1">Развивающие игрушки</a></li>
                    <li><a href="1">Мягкие игрушки</a></li>
                    <li><a href="1">Настольные игры</a></li>
                </ul>
            </div>
            <div className={styles.left_sideBar_filter}>
                <h3>Выбор по цене</h3>
                <div>
                    <label className={styles.left_sideBar_label} htmlFor=""><b>От</b></label><input type="text"/><br/>
                    <label className={styles.left_sideBar_label} htmlFor=""><b>До</b></label><input type="text"/>
                </div>
            </div>
        </div>
    )
}
