import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Message from "./Message";
import Loader from "./loader";

const CrudApi = () => {
	const [db, setDb] = useState(null);
	const [dataToEdit, setdataToEdit] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let api = helpHttp();
	let url = "http://localhost:5000/santos";

	useEffect(() => {
		setLoading(true);
		helpHttp()
			.get(url)
			.then((res) => {
				console.log(res);

				if (!res.err) {
					setDb(res);
					setError(null);
				} else {
					setDb(null);
					setError(res);
				}
				setLoading(false);
			});
	}, [url]);

	const CreateData = (data) => {
		data.id = Date.now();
		// console.log(data);

		let options = {
			body: data,
			headers: { "content-type": "application/json" },
		};

		api.post(url, options).then((res) => {
			//console.log(res);

			if (!res.err) {
				setDb([...db, res]);
			} else {
				setError(res);
			}
		});
	};

	const UpdateData = (data) => {
		let endpoint = `${url}/${data.id}`;
		let options = {
			body: data,
			headers: { "content-type": "application/json" },
		};

		api.put(endpoint, options).then((res) => {
			//console.log(res);
			if (!res.err) {
				let newData = db.map((el) => (el.id === data.id ? data : el));
				setDb(newData);
			} else {
				setError(res);
			}
		});
	};

	const DeleteData = (id) => {
		let isDelete = window.confirm(
			`Estas seguro de eliminar el registro con el ? '${id}'`
		);

		if (isDelete) {
			let endpoint = `${url}/${id}`;
			let options = {
				headers: { "content-type": "application/json" },
			};
			api.del(endpoint, options).then((res) => {
				if (!res.err) {
					let newData = db.filter((el) => el.id !== id);
					setDb(newData);
				} else {
					setError(res);
				}
			});
		} else {
			return;
		}
	};

	return (
		<div>
			<article className="grid-1-1">
				<CrudForm
					CreateData={CreateData}
					UpdateData={UpdateData}
					dataToEdit={dataToEdit}
					setdataToEdit={setdataToEdit}
				/>
				{error && (
					<Message
						msg={`Error ${error.status}: ${error.statusText}`}
						bgColor="#dc3545"
					/>
				)}
				{loading && <Loader />}

				{db && (
					<CrudTable
						data={db}
						setdataToEdit={setdataToEdit}
						DeleteData={DeleteData}
					/>
				)}
			</article>
		</div>
	);
};
export default CrudApi;
