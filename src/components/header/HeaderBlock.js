import React from "react";
import styles from './HeaderBlock.module.css';
import {Logo} from "./Logo";
import {constants} from '../../constants/constants';

export const HeaderBlock = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_wrapper}>
                {/*<div className={styles.half_column}>*/}
                    <Logo/>
                    <div>Контакты</div>
                    <div>Вход</div>
                {/*</div>*/}
                {/*<div className={styles.half_column}>*/}
                    <div>
                        <label htmlFor="">Поиск</label>
                        <input className={styles.header_input} type="text"/>
                    </div>
                    <div className={styles.cart_wishlist_block}>
                        <div>
                            <button>
                                <img className={styles.wishlist_icon} src={constants.WISHLIST_1} alt="wishlist"/>
                            </button>
                        </div>
                        <div>
                            <button>
                                <img className={styles.cart_icon} src={constants.CART_2} alt="cart"/>
                            </button>
                        </div>
                    </div>
                {/*</div>*/}
            </div>
        </div>
    )
}
