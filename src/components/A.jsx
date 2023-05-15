import { useState } from "react";
import B from "./B";
import C from "./C";
const A = () => {
	const [name, setName] = useState("");

	const hChange = (e) => {
		setName(e.target.value);
	};
	return (
		<div className="block">
			<h1>A</h1>
			<div className="blocks">
				<B name={name} />
				<C hChange={hChange} />
			</div>
		</div>
	);
};

export default A;
