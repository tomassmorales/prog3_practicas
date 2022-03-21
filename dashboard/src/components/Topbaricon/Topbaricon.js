import React from "react";

function Topbaricon (props) {
	return (
		<li className="nav-item dropdown no-arrow mx-1">
		<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
			<i className={props.icon}></i>
                        <span className="badge badge-danger badge-counter">{props.numero}</span>
		</a>
	        </li>	
	);
}

export default Topbaricon;