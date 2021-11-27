import groove from "../assets/audio/GrooveB_120bpm_Tanggu.mp3";
import funk from "../assets/audio/funk.mp3";
import stutter from "../assets/audio/120_stutter_breakbeats_16.mp3";
import bass from "../assets/audio/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import electric from "../assets/audio/electric guitar coutry slide 120bpm - B.mp3";
import fud from "../assets/audio/FUD_120_StompySlosh.mp3";
import maze from "../assets/audio/MazePolitics_120_Perc.mp3";
import pass from "../assets/audio/PAS3GROOVE1.03B.mp3";
import silent from "../assets/audio/SilentStar_120_Em_OrganSynth.mp3";

const grooveAudio = new Audio(groove);
const funkAudio = new Audio(funk);
const stutterAudio = new Audio(stutter);
const bassAudio = new Audio(bass);
const electricAudi = new Audio(electric);
const fudAudio = new Audio(fud);
const mazeAudio = new Audio(maze);
const passAudio = new Audio(pass);
const silentAudio = new Audio(silent);

export const loops = [
	{ name: "Drum", status: "Inactive", color: "red", audioObj: grooveAudio },
	{ name: "Piano", status: "Inactive", color: "red", audioObj: funkAudio },
	{
		name: "ClassicGuitar",
		status: "Inactive",
		color: "red",
		audioObj: stutterAudio
	},
	{ name: "Trumpet", status: "Inactive", color: "red", audioObj: bassAudio },
	{
		name: "Guitar",
		status: "Inactive",
		color: "red",
		audioObj: electricAudi
	},
	{ name: "DrumKit", status: "Inactive", color: "red", audioObj: fudAudio },
	{
		name: "MusicNote",
		status: "Inactive",
		color: "red",
		audioObj: mazeAudio
	},
	{ name: "Tunes", status: "Inactive", color: "red", audioObj: silentAudio },
	{ name: "Lolo", status: "Inactive", color: "red", audioObj: passAudio }
];
