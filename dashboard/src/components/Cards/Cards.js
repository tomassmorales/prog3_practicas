import React, {Component} from "react";
import "./Cards.css"

class Cards extends Component {
	constructor(props){
		super(props);
		this.state = {
			props: props,
			verMas: "ver",
			verMenos: "unShow",
			descripcion: "unShow",
			card: "character-card"
		}
	}
	verMas(){
		this.setState({
			verMas: "unShow",
			verMenos: "ver",
			descripcion: "",
		})
	}
	verMenos(){
		this.setState({
			verMenos: "unShow",
			verMas: "ver",
			descripcion: "unShow"
		})
	}
	selected(){
		this.setState({
			card: "character-card-selected"
		})
	}
	back (){
		this.setState({
			card: "character-card"
		})
	}
	render() {
		return(
			<div className= {this.state.card} onMouseOver= {() => this.selected()} onDoubleClick= {() => this.selected()} onMouseOut = {() => this.back()}>
			    <img src={this.state.props.imagen} alt={this.state.props.nombre}/>
			    <h4>{this.state.props.nombre}</h4>
			    <p className= {this.state.descripcion} >{this.state.props.descripcion}</p>
		            <a onClick = {() => this.verMas()} className = {this.state.verMas}>Ver más</a>
			    <a onClick = {() => this.verMenos()} className = {this.state.verMenos}>Ver menos</a>
			</div>
			);	
	}
}


export default Cards;