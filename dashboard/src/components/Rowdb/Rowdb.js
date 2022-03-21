import React from "react";

import Last from "../Last/Last"
import Categoriascard from "../Categoriascard/Categoriascard"


function Rowdb (props) {
	return (
		<div className="row">
		<Last/>
		<div className="col-lg-6 mb-4">						
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
				</div>
				<div className="card-body">
					<div className="row">
						{props.categorias.map((categoria,idx) => <Categoriascard key= {categoria + idx} categoria= {categoria.categoria}/>)}
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}

export default Rowdb;