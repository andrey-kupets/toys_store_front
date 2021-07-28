import React from "react";
import styles from './Error.module.css';

export const Error = ({error}) => <div className={styles.error_wrapper}>{error}</div>;
