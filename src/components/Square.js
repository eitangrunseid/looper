import React, { useEffect, useState } from "react";
import "../App.css";
import funk from "../assets/audio/funk.mp3";
import groove from "../assets/audio/GrooveB_120bpm_Tanggu.mp3";

function Square() {
	const audio = new Audio(groove);
	const [isOn, setIsOn] = useState(false);
	const [isOff, setIsOff] = useState(true);

	// useEffect(() => {
	// 	console.log("isOff:", isOff);
	// 	console.log("isOn:", isOn);
	// }, [(isOn, isOff)]);

	const handleClick = () => {
		// setIsOn(!isOn);
		// setIsOff(!isOff);
		audio.play();

		setTimeout(() => {
			audio.pause();
		}, [2000]);
	};

	return (
		<div className="square-wrap">
			<div className="square" onClick={handleClick}></div>
		</div>
	);
}

export default Square;
