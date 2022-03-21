import React, {Component} from "react";
import Cards from "../Cards/Cards"
import "./Cardfila.css"

class Cardfila extends Component {
	constructor(props){
		super(props);
		this.state = {
			characters: props
		}
	}

	render(){
		return(
			<section className="cardFila">
				{this.state.characters.cards.map((card, idx) => <Cards key={card + idx} imagen= {card.imagen} nombre = {card.nombre} descripcion= {card.descripcion}/>)}
			</section>
			);
	}
}

export default Cardfila;