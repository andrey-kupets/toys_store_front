import React from "react";
import styles from './LeftSideBar.module.css';
import { Link } from "react-router-dom";

export const LeftSideBar = () => {
    return (
        <div className={styles.left_sideBar}>
            <div className={styles.left_sideBar_category}>
                <h1>Категория</h1>
                <ul>
                    {/*<li><a href="1">Игрушки для малышей</a></li>*/}
                    <li><Link to="/products?category=Игрушки%20для%20малышей">Игрушки для малышей</Link></li>
                    <li><a href="1">Машинки и спецтехника</a></li>
                    <li><a href="1">Коляски и куклы</a></li>
                    <li><a href="1">Творчество</a></li>
                    <li><a href="1">Развивающие игрушки</a></li>
                    <li><a href="1">Мягкие игрушки</a></li>
                    <li><a href="1">Настольные игры</a></li>
                </ul>
            </div>
            <div className={styles.left_sideBar_filter}>
                <h3>Ценовой фильтр</h3>
                <div>
                    <input type="text" placeholder='Укажите цену "От" ...грн.'/><br/>
                    <input type="text" placeholder='Укажите цену "До" ...грн.'/>
                </div>
            </div>
        </div>
    );
};
