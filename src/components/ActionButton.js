import React from "react";

function ActionButton({ action }) {
	return (
		<div>
			<button className="button">{action}</button>
		</div>
	);
}

export default ActionButton;
