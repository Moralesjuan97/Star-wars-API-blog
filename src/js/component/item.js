import React, { useContext, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

export const Item = props => {
	const { store, actions } = useContext(Context);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		setloading(false);
	}, []);

	const charProperties = props.properties.map((property, index) => {
		const toggleFavorite = () => {
			if (actions.isFavorite(property.name) === true) {
				actions.deleteFavorite(property.name);
			} else {
				actions.addFavorite(property.name);
			}
		};

		const heart = <FontAwesomeIcon icon={faHeart} />;
		const heartbroken = <FontAwesomeIcon icon={faHeartBroken} />;
		let icon = setIcon();

		function setIcon() {
			if (actions.isFavorite(property.name) === true) {
				return heart;
			} else {
				return heartbroken;
			}
		}

		return (
			<div key={index}>
				{loading ? (
					<h2>
						<FontAwesomeIcon icon={faSpinner} style={{ margin: "20px" }} />
					</h2>
				) : (
					<div className="container-fluid">
						<Card style={{ width: "18rem" }} className="">
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>{property.name}</Card.Title>
								<Link to={"/" + props.url + "/" + property.uid + "/"}>
									<Button>Learn more</Button>
								</Link>
								<Button onClick={toggleFavorite} style={{ margin: "5px", color: "red" }}>
									{icon}
								</Button>
							</Card.Body>
						</Card>
					</div>
				)}
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
	typeName: PropTypes.string,
	url: PropTypes.string
};
