import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Favorite } from "./favoriteitem";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Favoritelist = () => {
	const { store, actions } = useContext(Context);

	let favoriteList = store.favorites.map((favorite, index) => {
		const deleteFavorite = () => {
			actions.deleteFavorite(favorite);
		};

		return (
			<div key={index} className="container-fluid d-flex">
				<div>
					<p style={{ margin: "7px" }}>{favorite}</p>
				</div>
				<Button onClick={deleteFavorite} style={{ margin: "3px" }}>
					X
				</Button>
			</div>
		);
	});

	return (
		<div className="btn-group">
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
					<span>({store.favorites.length})</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">{favoriteList}</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};
