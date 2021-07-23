import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Favorite } from "./favoriteitem";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Favoritelist = () => {
	const { store, actions } = useContext(Context);

	let favoriteList = store.favorites.map((favorite, index) => {
		const deleteFavorite = () => {
			actions.deleteFavorite(favorite);
		};

		return (
			<div key={index}>
				<p>{favorite}</p>
				<Button onClick={deleteFavorite}>X</Button>
			</div>
		);
	});

	return (
		<div className="btn-group">
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
					<span>{store.favorites.length}</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">{favoriteList}</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};
