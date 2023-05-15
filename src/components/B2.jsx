import { useContext } from "react";
import { NameContext } from "../context/NameContext.jsx";
const B2 = () => {
	// Ici, je récupère le contexte NameContext
	// Je peux récupérer la valeur de name
	// grâce à la destructuration
	const { value } = useContext(NameContext);

	return (
		<div className="block">
			<h1>B2, and hello {value.name} 👋</h1>
		</div>
	);
};

export default B2;
