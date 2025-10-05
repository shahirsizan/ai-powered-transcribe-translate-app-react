import React, { useRef, useEffect } from "react";
import { FaPenNib } from "react-icons/fa6";

export default function FileDisplay(props) {
	const { handleAudioReset, file, audioStream } = props;
	const audioRef = useRef();

	return (
		<main className="flex-1 justify-center py-4 flex flex-col gap-3 text-center sm:gap-4  pb-20 w-full">
			<h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
				Your <span className="text-blue-400 bold">File</span>
			</h1>

			<div className=" flex flex-col text-left my-4 mx-auto">
				<h3 className="font-semibold">Name</h3>

				<p className="truncate">{file ? file?.name : "Custom audio"}</p>
			</div>

			<div className="flex flex-col mb-2">
				<audio ref={audioRef} className="w-full" controls>
					Your browser does not support the audio element!
				</audio>
			</div>

			<div className="flex items-center justify-between gap-4 ">
				<button
					onClick={() => {
						handleAudioReset();
					}}
					className="text-slate-400 hover:text-blue-600 duration-200 cursor-pointer"
				>
					Reset
				</button>

				<button className="px-3 p-2 rounded-lg flex items-center justify-center gap-2 font-medium text-white/90 bg-blue-700/70 shadow-xl cursor-pointer">
					<p>Transcribe</p>
					<FaPenNib />
				</button>
			</div>
		</main>
	);
}
