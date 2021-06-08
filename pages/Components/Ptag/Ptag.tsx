import React from "react";
import {PtagProps} from "./Ptag.props";
import styles from "./Ptag.module.css";
import classnames from 'classnames';

const Ptag = ({children, size='m', className, ...props}:PtagProps ): JSX.Element => {
return	(
	<p className={classnames(styles.p, {
		[styles.s]: size == 's',
		[styles.m]: size == 'm',
		[styles.l]: size == 'l',
	})} {...props}>
		{children}
	</p>
)
};

export default Ptag;