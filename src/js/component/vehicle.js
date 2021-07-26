import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Item } from "./item";
import { Card } from "react-bootstrap";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Vehicle = () => {
	const { store, actions } = useContext(Context);
	const [vehicles, setvehicles] = useState([]);

	useEffect(() => {
		getVehicles();
	}, []);

	async function getVehicles() {
		let res = await actions.getVehicles();
		const vehicleResults = getvehicleDetails();
		setvehicles(vehicleResults);
		console.log(vehicleResults);
	}

	function getvehicleDetails() {
		let vehicleDetails = [];
		vehicleDetails = store.vehicles.results.map((vehicle, index) => {
			return {
				name: vehicle.name,
				uid: vehicle.uid,
				url: vehicle.url
			};
		});

		return vehicleDetails;
	}

	return (
		<div>
			<Item properties={vehicles} typeName={"Starships"} url={"vehicledetails"} />
		</div>
	);
};
