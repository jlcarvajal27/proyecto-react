import React from "react";

const CrudTableRow = ({ el, setdataToEdit, DeleteData }) => {
	let { name, habilidad, id } = el;
	return (
		<tr>
			<td>{name}</td>
			<td>{habilidad}</td>
			<td>
				<button onClick={() => setdataToEdit(el)}>editar</button>
				<button onClick={() => DeleteData(id)}>eliminar</button>
			</td>
		</tr>
	);
};
export default CrudTableRow;
