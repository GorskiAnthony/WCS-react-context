import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";

const C = ({ hChange }) => {
	return (
		<div className="block">
			<h1>C</h1>
			<div className="blocks">
				<C1 />
				<C2 hChange={hChange} />
				<C3 />
			</div>
		</div>
	);
};

export default C;
