import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FileDisplay from "./components/FileDisplay";

function App() {
	const [file, setFile] = useState(null);
	const [audioStream, setAudioStream] = useState(null);
	const isAudioAvailable = file || audioStream;

	const handleAudioReset = () => {
		setFile(null);
		setAudioStream(null);
	};

	return (
		<div className="flex flex-col px-[5vw] mdpx-[8vw] xl:px-[12vw]">
			<section className="min-h-screen  flex flex-col">
				<Header />

				{isAudioAvailable ? (
					<FileDisplay
						handleAudioReset={handleAudioReset}
						file={file}
						audioStream={audioStream}
					/>
				) : (
					<HomePage setFile={setFile} audioStream={audioStream} />
				)}
			</section>
		</div>
	);
}

export default App;
