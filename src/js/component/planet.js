import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Item } from "./item";
import { Card } from "react-bootstrap";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const [planets, setplanets] = useState([]);

	useEffect(() => {
		getPlanets();
	}, []);

	async function getPlanets() {
		let res = await actions.getPlanets();
		const planetResults = getplanetDetails();
		setplanets(planetResults);
		console.log(planetResults);
	}

	function getplanetDetails() {
		let planetDetails = [];
		planetDetails = store.planets.results.map((planet, index) => {
			return {
				name: planet.name,
				uid: planet.uid,
				url: planet.url
			};
		});

		return planetDetails;
	}

	return (
		//aqui va el scroll horizontal
		//
		<div>
			<Item properties={planets} typeName={"Planets"} url={"planetdetails"} />
		</div>
	);
};
