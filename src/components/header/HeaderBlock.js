import React from "react";
import styles from './HeaderBlock.module.css';

export const HeaderBlock = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.half}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div className={styles.half}>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>
        </div>
    )
}
