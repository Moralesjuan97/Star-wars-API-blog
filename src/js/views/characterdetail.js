import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";

export const Character = props => {
	const [character, setCharacter] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + props.match.params.id)
			.then(res => res.json())
			.then(data => {
				console.log(data.result.properties);
				setCharacter(data.result.properties);
			});
	}, []);

	return (
		<div>
			<div>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Name</th>
							<th>Birth year</th>
							<th>Gender</th>
							<th>Height</th>
							<th>Eye Color</th>
							<th>Hair Color</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{character.name}</td>
							<td>{character.birth_year}</td>
							<td>{character.gender}</td>
							<td>{character.height}</td>
							<td>{character.eye_color}</td>
							<td>{character.hair_color}</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
