import React from "react";
import {FooterProps} from "./Footer.props";
import styles from "./Footer.module.css";
import classnames from 'classnames';
import {format} from 'date-fns';
const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <div className={classnames(className, styles.footer)} {...props} >
            <a href={'#'}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</a>
            <a href={'#'}>Пользовательское соглашение</a>
            <a href={'#'}>Политика конфиденциальности</a>
        </div>
    )
};

export default Footer;