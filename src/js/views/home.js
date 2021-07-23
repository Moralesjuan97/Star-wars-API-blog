import React from "react";
import "../../styles/home.scss";
import { Character } from "../component/character";
import { Vehicle } from "../component/vehicle";
import { Planet } from "../component/planet";

export const Home = () => (
	<div className="">
		<Character />

		<Vehicle />

		<Planet />
	</div>
);
