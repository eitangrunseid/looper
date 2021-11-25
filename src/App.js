import "./App.css";
import Square from "./components/Square";
import ActionButton from "./components/ActionButton";

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
