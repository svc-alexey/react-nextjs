import React from "react";
import {HeaderProps} from "./Header.props";
import styles from "./Header.module.css";
import classnames from 'classnames';

const Header = ({...props}:HeaderProps ): JSX.Element => {
return	(
	<div {...props}>
	HEADER
	</div>
)
};

export default Header;