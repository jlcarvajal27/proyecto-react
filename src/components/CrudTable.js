import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setdataToEdit, DeleteData }) => {
	return (
		<div>
			<h3>tabla de datos</h3>
			<table>
				<thead>
					<tr>
						<th>nombre</th>
						<th>habilidad</th>
						<th>acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map((el) => (
							<CrudTableRow
								key={el.id}
								el={el}
								setdataToEdit={setdataToEdit}
								DeleteData={DeleteData}
							/>
						))
					) : (
						<tr>
							<td colSpan="3"> sin datos</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
export default CrudTable;
