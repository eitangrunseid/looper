import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

function ActionButton({ action }) {
	const context = useContext(AppContext);

	const handleClick = () => {
		const recordArray = context.loops.map((loop, i) => {
			if (action === "Play") {
				if (loop.status === "active") {
					loop.audioObj.play();
					return loop;
				}
			} else {
				loop.audioObj.pause();
				loop.audioObj.currentTime = 0;
			}
		});
		if (context.isRecording) {
			context.setRecordSession(recordArray);
		}
	};

	return (
		<div>
			<button className="button" onClick={handleClick}>
				{action}
			</button>
		</div>
	);
}

export default ActionButton;
