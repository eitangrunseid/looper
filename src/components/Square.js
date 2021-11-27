import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import AppContext from "../context/AppContext";

import { FaDrum, FaAngellist, FaItunesNote, FaGuitar } from "react-icons/fa";
import { GiGuitar, GiGrandPiano, GiDrumKit, GiTrumpet } from "react-icons/gi";
import { BsMusicNoteList } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";

function Square({ iconName }) {
	const context = useContext(AppContext);

	const [isOn, setIsOn] = useState(false);
	const [isOff, setIsOff] = useState(true);

	const [color, setColor] = useState("");

	const checkIconsNames = () => {
		switch (iconName) {
			case "Drum":
				return <FaDrum size={50} color={"gold"} />;
			case "Guitar":
				return <GiGuitar size={50} color={"red"} />;
			case "ClassicGuitar":
				return <FaGuitar size={50} color={"red"} />;
			case "Piano":
				return <GiGrandPiano size={50} color={"red"} />;
			case "DrumKit":
				return <GiDrumKit size={50} color={"gold"} />;
			case "MusicNote":
				return <BsMusicNoteList size={50} color={"white"} />;
			case "Tunes":
				return <FaItunesNote size={50} color={"white"} />;
			case "Lolo":
				return <IoMusicalNoteOutline size={50} color={"white"} />;
			case "Trumpet":
				return <GiTrumpet size={50} color={"gold"} />;
			default:
				return <FaAngellist size={50} color={"white"} />;
		}
	};

	const handleClick = () => {
		setIsOn(!isOn);
		setIsOff(!isOff);

		context.loops.forEach((element) => {
			if (!isOn) {
				if (element.name === iconName) {
					element.status = "active";
					setColor("on");
				}
			} else {
				element.status = "Inactive";
				setColor("");
			}
			if (!isOff) {
				if (element.name === iconName) {
					element.audioObj.pause();
					element.audioObj.currentTime = 0;
				}
			}
		});
	};

	return (
		<div className="square-wrap">
			<div className={`square ${color}`} onClick={handleClick}>
				<p className="icon">{checkIconsNames()}</p>
			</div>
		</div>
	);
}

export default Square;
