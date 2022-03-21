import React from "react";

function Navitems (props) {
	return (
		<li className="nav-item">
		<a className="nav-link" href="/">
			<i className= {props.icon}></i>
	                <span>{props.name}</span></a>
		</li>
	);
}

export default Navitems;