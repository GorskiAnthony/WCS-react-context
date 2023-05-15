import { createContext, useMemo, useState } from "react";

const NameContext = createContext("");

const NameContextProvider = ({ children }) => {
	const [name, setName] = useState("");

	/*
	 Maintenant, nous allons utiliser useMemo
	 pour éviter de créer un nouvel objet à chaque fois que le composant est rendu 😁
	 `useMemo` prend 2 arguments
     - en premier argument une fonction callback qui retourne la valeur que l'on souhaite stocker dans le contexte
	 - et en second argument, un tableau de dépendances
	 si une des dépendances change, la fonction est exécutée
	 et la valeur est mise à jour
	 si aucune dépendance n'est passée, la fonction n'est exécutée qu'une seule fois
    */
	// Nous pouvons maintenant passer la valeur du contexte

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const value = useMemo(() => ({ name, handleChange }), [name]);

	return (
		<NameContext.Provider value={{ value }}>
			{children}
		</NameContext.Provider>
	);
};

export { NameContextProvider, NameContext };
