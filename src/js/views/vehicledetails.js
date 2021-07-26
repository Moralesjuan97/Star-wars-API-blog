import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Vehicle = props => {
	const [vehicle, setvehicle] = useState([]);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		getList();
	}, []);

	const getList = () => {
		fetch("https://www.swapi.tech/api/starships/" + props.match.params.id)
			.then(res => res.json())
			.then(data => {
				console.log(data.result.properties);
				setvehicle(data.result.properties);
				setloading(false);
			});
	};

	return (
		<div>
			<div className="container-fluid">
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Passengers</th>
							<th>MGLT</th>
							<th>Consumables</th>
							<th>Cargo capacity</th>
							<th>Hyperdrive rating</th>
							<th>Pilots</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{loading ? (
								<>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
									<td>
										<FontAwesomeIcon icon={faSpinner} />{" "}
									</td>
								</>
							) : (
								<>
									<td>{vehicle.passengers}</td>
									<td>{vehicle.MGLT}</td>
									<td>{vehicle.consumables}</td>
									<td>{vehicle.cargo_capacity}</td>
									<td>{vehicle.hyperdrive_rating}</td>
									<td>{vehicle.pilots}</td>
								</>
							)}
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
