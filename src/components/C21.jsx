import { useContext } from "react";
import { NameContext } from "../context/NameContext.jsx";

const C21 = () => {
	const { value } = useContext(NameContext);
	return (
		<div className="block">
			<h1>C21</h1>
			<input type="text" onChange={value.handleChange} />
		</div>
	);
};

export default C21;
