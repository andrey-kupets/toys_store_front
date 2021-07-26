import React from "react";
import styles from './Error.module.css';

export const Error = ({error}) => <span className={styles.error_wrapper}>{error}</span>;
