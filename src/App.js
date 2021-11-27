import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Square from "./components/Square";
import ActionButton from "./components/ActionButton";
import AppContext from "./context/AppContext";
import { loops as audioData } from "./data/audioData";

function App() {
	const [loops, setLoops] = useState(audioData);
	const [color, setColor] = useState("");

	return (
		<div>
			<AppContext.Provider
				value={{ loops: loops, setLoops: setLoops, color: color, setColor }}
			>
				<div className="container">
					<div className="square-wrapper">
						<Square iconName={"Piano"} />
						<Square iconName={"Guitar"} />
						<Square iconName={"DrumKit"} />
						<Square iconName={"ClassicGuitar"} />
						<Square iconName={"Drum"} />
						<Square iconName={"MusicNote"} />
						<Square iconName={"Trumpet"} />
						<Square iconName={"Lolo"} />
						<Square iconName={"Tunes"} />
					</div>
					<div className="buttons-wrapper">
						<ActionButton action="Play" />
						<ActionButton action="Stop" />
					</div>
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
