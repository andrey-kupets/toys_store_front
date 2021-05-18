import React from "react";
import styles from './Main.module.css';

export const LeftSideBar = () => {
    return (
        <div className={styles.left_sideBar}>
            <div>
                <h2>Категория</h2>
                <ul>
                    <li><a href="">Игрушки для малышей</a></li>
                    <li><a href="">Машинки и спецтехника</a></li>
                    <li><a href="">Коляски и куклы</a></li>
                    <li><a href="">Творчество</a></li>
                    <li><a href="">Развивающие игрушки</a></li>
                    <li><a href="">Мягкие игрушки</a></li>
                    <li><a href="">Настольные игры</a></li>
                </ul>
            </div>
            <div>
                <h3>Выбор по цене</h3>
                <label htmlFor="">От</label><input type="text"/><br/>
                <label htmlFor="">До</label><input type="text"/>
            </div>
        </div>
    )
}
