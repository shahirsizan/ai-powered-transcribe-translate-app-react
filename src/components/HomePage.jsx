import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

export default function HomePage({ setAudioStream, setFile }) {
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

			<button className="flex px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 text-white/90 bg-blue-700/70 shadow-xl cursor-pointer">
				<p className="">Record</p>

				<div className="flex items-center gap-2">
					<FaMicrophone />
				</div>
			</button>

			<p className="text-base">
				Or{" "}
				<label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200">
					upload{" "}
					<input
						onChange={(e) => {
							setFile(e.target.files[0]);
						}}
						className="hidden"
						type="file"
						accept=".mp3,.wave"
					/>
				</label>{" "}
				an mp3 file
			</p>
		</main>
	);
}
