import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

export default function HomePage(props) {
	const { setAudioStream, setFile } = props;

	const [recordingStatus, setRecordingStatus] = useState("inactive");
	const [audioChunks, setAudioChunks] = useState([]);
	const [duration, setDuration] = useState(0);

	const mediaRecorder = useRef(null);

	const mimeType = "audio/webm";

	async function startRecording() {
		let tempStream;
		console.log("Start recording");

		try {
			const streamData = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: false,
			});
			tempStream = streamData;
		} catch (err) {
			console.log(err.message);
			return;
		}
		setRecordingStatus("recording");

		//create new Media recorder instance using the stream
		const media = new MediaRecorder(tempStream, { type: mimeType });
		mediaRecorder.current = media;

		mediaRecorder.current.start();
		let localAudioChunks = [];
		mediaRecorder.current.ondataavailable = (event) => {
			if (typeof event.data === "undefined") {
				return;
			}
			if (event.data.size === 0) {
				return;
			}
			localAudioChunks.push(event.data);
		};
		setAudioChunks(localAudioChunks);
	}

	async function stopRecording() {
		setRecordingStatus("inactive");
		console.log("Stop recording");

		mediaRecorder.current.stop();
		mediaRecorder.current.onstop = () => {
			const audioBlob = new Blob(audioChunks, { type: mimeType });
			setAudioStream(audioBlob);
			setAudioChunks([]);
			setDuration(0);
		};
	}

	useEffect(() => {
		if (recordingStatus === "inactive") {
			return;
		}

		const interval = setInterval(() => {
			setDuration((curr) => curr + 1);
		}, 1000);

		return () => clearInterval(interval);
	});

	return (
		<main className="flex-1 py-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20">
			<h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
				Free<span className="text-blue-400 font-bold">Scribe</span>
			</h1>

			<h3 className="flex items-center mx-auto font-semibold md:text-lg">
				Record{" "}
				<span className="text-blue-400">
					<FaArrowRight />
				</span>{" "}
				Transcribe{" "}
				<span className="text-blue-400">
					<FaArrowRight />
				</span>{" "}
				Translate
			</h3>

			<button className="flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 text-white/90 bg-blue-700/70 shadow-xl cursor-pointer">
				<p className="">Record</p>

				<div className="flex items-center gap-2">
					<FaMicrophone
						className={
							"fa-solid duration-200 fa-microphone " +
							(recordingStatus === "recording"
								? " text-rose-300"
								: "")
						}
					/>
				</div>
			</button>

			<p className="text-base">
				Or{" "}
				<label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200">
					upload{" "}
					<input className="hidden" type="file" accept=".mp3,.wave" />
				</label>{" "}
				an mp3 file
			</p>
		</main>
	);
}
