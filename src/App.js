import "./App.css";
import Square from "./components/Square";
import ActionButton from "./components/ActionButton";

function App() {
	return (
		<>
			<div className="container">
				<div className="square-wrapper">
					<Square />
					<Square />
					<Square />
					<Square />
					<Square />
					<Square />
					<Square />
					<Square />
					<Square />
				</div>
				<div className="buttons-wrapper">
					<ActionButton action="Play" />
					<ActionButton action="Stop" />
				</div>
			</div>
		</>
	);
}

export default App;
