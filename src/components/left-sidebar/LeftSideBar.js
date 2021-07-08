import React from "react";
import styles from './LeftSideBar.module.css';
import { Link, useHistory } from "react-router-dom";
import { constants } from '../../constants';


export const LeftSideBar = () => {
    const history = useHistory();
    const onFormSubmit = (e) => {
        e.preventDefault();
        const priceGte = e.target[0].value;
        const priceLte = e.target[1].value;

        history.push(`/products?gte=${priceGte}&lte=${priceLte}`);
    }

    return (
        <div className={styles.left_sideBar}>
            <div className={styles.left_sideBar_category}>
                <h1>Категория</h1>
                <ul>
                    <li><Link to={`products?category=${constants.toys_for_toddlers}`}>Игрушки для малышей</Link></li>
                    <li><Link to={`/products?category=${constants.cars_and_special_equipment}`}>Машинки и спецтехника</Link></li>
                    <li><Link to={`/products?category=${constants.strollers_and_dolls}`}>Коляски и куклы</Link></li>
                    <li><Link to={`/products?category=${constants.creation}`}>Творчество</Link></li>
                    <li><Link to={`/products?category=${constants.educational_toys}`}>Развивающие игрушки</Link></li>
                    <li><Link to={`/products?category=${constants.stuffed_toys}`}>Мягкие игрушки</Link></li>
                    <li><Link to={`/products?category=${constants.board_games}`}>Настольные игры</Link></li>
                </ul>
            </div>
            <div className={styles.left_sideBar_filter}>
                <h3>Ценовой фильтр</h3>
                <form onSubmit={onFormSubmit}>
                    <input type="number" placeholder='Укажите цену "От" ...грн.'/><br/>
                    <input type="number" placeholder='Укажите цену "До" ...грн.'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};
