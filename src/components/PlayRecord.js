import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function PlayRecord() {
	const context = useContext(AppContext);

	const handlePlay = () => {
		context.recordSession.map((record) => {
			if (record) {
				record.audioObj.play();
			}
		});
	};

	return (
		<>
			{!context.isRecording ? (
				<button onClick={handlePlay} className="button play-session">
					Play Session
				</button>
			) : null}
		</>
	);
}

export default PlayRecord;
