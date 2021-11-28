import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function RecordButton() {
	const context = useContext(AppContext);

	const handleChange = (e) => {
		if (e.target.checked === true) {
			context.setIsRecording(e.target.checked);
		} else {
			context.setIsRecording(e.target.checked);
		}
	};

	return (
		<div>
			<FormGroup>
				<FormControlLabel
					control={<Switch onChange={handleChange} defaultChecked />}
					label={`${context.isRecording ? "Record is on" : "Record is off"}`}
					labelPlacement="start"
				/>
			</FormGroup>
		</div>
	);
}

export default RecordButton;
