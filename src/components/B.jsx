import B1 from "./B1";
import B2 from "./B2";

const B = ({ name }) => {
	return (
		<div className="block">
			<h1>B</h1>
			<div className="blocks">
				<B1 />
				<B2 name={name} />
			</div>
		</div>
	);
};

export default B;
