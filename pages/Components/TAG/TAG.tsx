import React from "react";
import {TAGProps} from "./TAG.props";
import styles from "./TAG.module.css";
import classnames from 'classnames';

const TAG = ({children, size, color, className, href, ...props}: TAGProps): JSX.Element => {

    return (
        <div
            className={classnames(styles.tag, className, {
                [styles.s]: size == 's',
                [styles.l]: size == 'l',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.green]: color == 'green',
                [styles.grey]: color == 'grey',
                [styles.primary]: color == 'primary',
            })}
            {...props}>
            {
                href ? <a href={href}>{children}</a> :
                    <>{children}</>
            }
        </div>
    )

}
;

export default TAG;