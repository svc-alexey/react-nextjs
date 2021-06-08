import React from "react";
import styles from "./Button.module.css";
import {ButtonProps} from "./Button.props";
import classnames from 'classnames';
import ArrowIcon from "./arrow.svg";

const Button = ( {inapp, arrow = 'none', children, className, ...props}:ButtonProps ): JSX.Element => {
    return <>
    <button className={classnames(styles.button, className, {
        [styles.primary]: inapp == 'primary',
        [styles.ghost]: inapp == 'ghost'
    })}
        {...props}>
        {children}
        {arrow != 'none' &&
        <span className={classnames ( styles.arrow, {
        [styles.down]: arrow == 'down'}) }>
            <ArrowIcon/>
        </span>}
    </button>
    </>
};

export default Button;