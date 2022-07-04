import React, { useState, useEffect } from "react";

const InitialForm = {
	name: "",
	habilidad: "",
	id: null,
};

const CrudForm = ({ CreateData, UpdateData, dataToEdit, setdataToEdit }) => {
	const [form, setForm] = useState(InitialForm);
	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(InitialForm);
		}
	}, [dataToEdit]);

	const HandleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const HandleSubmit = (e) => {
		e.preventDefault();
		if (!form.name || !form.habilidad) {
			alert("datos incompletos");
			return;
		}
		if (form.id === null) {
			CreateData(form);
		} else {
			UpdateData(form);
		}
		HandleReset();
	};

	const HandleReset = (e) => {
		setForm(InitialForm);
		setdataToEdit(null);
	};
	return (
		<div>
			<h3>{dataToEdit ? "editar" : "agregar datos"}</h3>
			<form onSubmit={HandleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="nombre"
					onChange={HandleChange}
					value={form.name}
				/>

				<input
					type="text"
					name="habilidad"
					placeholder="habilidad"
					onChange={HandleChange}
					value={form.habilidad}
				/>

				<input type="submit" value="Enviar" />

				<input type="reset" value="Limpiar" onClick={HandleReset} />
			</form>
		</div>
	);
};
export default CrudForm;
