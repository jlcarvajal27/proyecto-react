import React from "react";

const Message = ({ msg, bgColor }) => {
	let style = {
		padding: "1rem",
		marginBotton: "1rem",
		textAling: "center",
		color: "#fff",
		fontWeigth: "bold",
		backgroundColor: bgColor,
	};

	return (
		<div style={style}>
			<p> {msg}</p>
		</div>
	);
};
export default Message;
