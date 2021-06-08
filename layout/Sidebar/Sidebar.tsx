import React from "react";
import {SidebarProps} from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import classnames from 'classnames';

const Sidebar = ({...props}:SidebarProps ): JSX.Element => {
return	(
	<div {...props}>
	SIDEBAR
	</div>
)
};

export default Sidebar;