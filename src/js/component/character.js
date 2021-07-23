import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Item } from "./item";
import { Card } from "react-bootstrap";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		getCharacters();
	}, []);

	async function getCharacters() {
		let res = await actions.getCharacters();
		const characterResults = getCharacterDetails();
		setCharacters(characterResults);
		console.log(characterResults);
	}

	function getCharacterDetails() {
		let characterDetails = [];
		characterDetails = store.characters.results.map((character, index) => {
			let details = [
				"Gender:" + character.gender,
				"Hair color:" + character.hair_color,
				"Eye color:" + character.eye_color
			];

			return {
				name: character.name,
				uid: character.uid,
				url: character.url,
				details: details
			};
		});

		return characterDetails;
	}

	return (
		//aqui va el scroll horizontal
		//
		<div>
			<Item properties={characters} typeName={"Characters"} />
		</div>
	);
};
