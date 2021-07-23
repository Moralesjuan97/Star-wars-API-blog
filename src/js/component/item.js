import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import PropTypes from "prop-types";

export const Item = props => {
	const { store, actions } = useContext(Context);

	const charProperties = props.properties.map((property, index) => {
		const toggleFavorite = () => {
			if (actions.isFavorite(property.name) === true) {
				actions.deleteFavorite(property.name);
			} else {
				actions.addFavorite(property.name);
			}
		};

		return (
			<div key={index}>
				<Card style={{ width: "18rem" }} className="">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>{property.name}</Card.Title>
						<Link to={"/characterdetail/" + property.uid + "/"}>
							<Button>Learn more</Button>
						</Link>
						<Button onClick={toggleFavorite}>Favorite</Button>
					</Card.Body>
				</Card>
			</div>
		);
	});
	return (
		<div className="container-fluid mb-3">
			<h1 className="text-danger">{props.typeName}</h1>
			<div className="overflow-auto row row flex-nowrap">{charProperties}</div>
		</div>
	);
};

Item.propTypes = {
	properties: PropTypes.array,
	typeName: PropTypes.string
};
