import React from "react";

function ActionButton({ action }) {
	const handleClick = () => {
		if (action === "Play") console.log("Play");
		else console.log("Stop");
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
