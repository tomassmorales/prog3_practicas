import React from "react";

import Datacards from "../Datacards/Datacards"

function Rowdata (props) {
	return (
		<div className="row">
		{props.dataCards.map((card, idx) => <Datacards key = {card + idx} titulo = {card.titulo} dato = {card.dato} icon = {card.icon} color = {card.color} colorText = {card.colorText}/>)}
		</div>
	);
}

export default Rowdata;