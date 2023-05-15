import B from "./B";
import C from "./C";
const A = () => {
	return (
		<div className="block">
			<h1>A</h1>
			<div className="blocks">
				<B />
				<C />
			</div>
		</div>
	);
};

export default A;
