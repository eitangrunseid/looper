import React, { useEffect, useState } from "react";
import "../App.css";

import groove from "../assets/audio/GrooveB_120bpm_Tanggu.mp3";
import funk from "../assets/audio/funk.mp3";
import stutter from "../assets/audio/120_stutter_breakbeats_16.mp3";
import bass from "../assets/audio/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import electirc from "../assets/audio/electric guitar coutry slide 120bpm - B.mp3";
import fud from "../assets/audio/FUD_120_StompySlosh.mp3";
import maze from "../assets/audio/MazePolitics_120_Perc.mp3";
import pass from "../assets/audio/PAS3GROOVE1.03B.mp3";
import silent from "../assets/audio/SilentStar_120_Em_OrganSynth.mp3";

import { FaDrum, FaAngellist, FaItunesNote, FaGuitar } from "react-icons/fa";
import { GiGuitar, GiGrandPiano, GiDrumKit, GiTrumpet } from "react-icons/gi";
import { BsMusicNoteList } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";

function Square({ iconName, audioName }) {
	const [isOn, setIsOn] = useState(false);
	const [isOff, setIsOff] = useState(true);
	const audio = new Audio(pass);
	// useEffect(() => {
	// 	console.log("isOff:", isOff);
	// 	console.log("isOn:", isOn);
	// }, [(isOn, isOff)]);

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
		audio.play();

		setTimeout(() => {
			audio.pause();
		}, [2000]);
	};

	return (
		<div className="square-wrap">
			<div className="square" onClick={handleClick}>
				<div className="icon">{checkIconsNames()}</div>
			</div>
		</div>
	);
}

export default Square;
