import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Planet = props => {
	const [planet, setplanet] = useState([]);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		getList();
		setTimeout(function() {
			setloading(false);
		}, 1500);
		//setloading(false);
	}, []);

	const getList = () => {
		fetch("https://www.swapi.tech/api/planets/" + props.match.params.id)
			.then(res => res.json())
			.then(data => {
				console.log(data.result.properties);
				setplanet(data.result.properties);
			});
	};

	return (
		<div>
			<div className="container-fluid">
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Diameter</th>
							<th>Rotation period</th>
							<th>Population</th>
							<th>Gravity</th>
							<th>Orbital period</th>
							<th>Surface water</th>
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
									<td>{planet.diameter}</td>
									<td>{planet.rotation_period}</td>
									<td>{planet.population}</td>
									<td>{planet.gravity}</td>
									<td>{planet.orbital_period}</td>
									<td>{planet.surface_water}</td>
								</>
							)}
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
