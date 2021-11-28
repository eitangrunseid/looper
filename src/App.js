import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Square from "./components/Square";
import ActionButton from "./components/ActionButton";
import AppContext from "./context/AppContext";
import { loops as audioData } from "./data/audioData";

import RecordButton from "./components/RecordButton";
import PlayRecord from "./components/PlayRecord";

function App() {
	const [loops, setLoops] = useState(audioData);
	const [color, setColor] = useState("");
	const [recordSession, setRecordSession] = useState([]);
	const [isRecording, setIsRecording] = useState(true);

	return (
		<>
			<AppContext.Provider
				value={{
					loops: loops,
					setLoops: setLoops,
					color: color,
					setColor,
					recordSession: recordSession,
					setRecordSession: setRecordSession,
					isRecording: isRecording,
					setIsRecording: setIsRecording
				}}
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
				</div>
				<div className="buttons-container">
					<div className="buttons-wrapper">
						<ActionButton action="Play" />
						<ActionButton action="Stop" />
					</div>
					<div className="record-wrapper">
						<RecordButton />
						<PlayRecord />
					</div>
				</div>
			</AppContext.Provider>
		</>
	);
}

export default App;
