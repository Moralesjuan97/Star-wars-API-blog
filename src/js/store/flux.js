import { Character } from "../component/character";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				let response = await fetch("https://www.swapi.tech/api/people/");
				let data = await response.json();
				setStore({ characters: data });
				//console.log(data.results);
			},
			addFavorite: name => {
				setStore({ favorites: [...getStore().favorites, name] });
			},
			deleteFavorite: name => {
				const newFavorites = getStore().favorites.filter(item => {
					return item != name;
				});
				setStore({ favorites: newFavorites });
			},
			isFavorite: name => {
				if (getStore().favorites) {
					return getStore().favorites.includes(name);
				} else {
					return false;
				}
			}
		}
	};
};

export default getState;
