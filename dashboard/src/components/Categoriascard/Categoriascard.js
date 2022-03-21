import React from "react";

function Categoriascard (props) {
	return (
		<div className="col-lg-6 mb-4">
		<div className="card bg-info text-white shadow">
			<div className="card-body">
				{props.categoria}
			</div>
		</div>
	</div>
	);
}

export default Categoriascard;