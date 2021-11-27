import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

function ActionButton({ action }) {
	const context = useContext(AppContext);

	useEffect(() => {}, []);

	const handleClick = () => {
		console.log(context.loops);
		context.loops.map((loop, i) => {
			if (action === "Play") {
				if (loop.status === "active") {
					loop.audioObj.play();
				}
			} else {
				loop.audioObj.pause();
				loop.audioObj.currentTime = 0;
			}
		});
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
