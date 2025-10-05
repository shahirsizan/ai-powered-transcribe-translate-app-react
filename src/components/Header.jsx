import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Header() {
	return (
		<header className="flex items-center justify-between gap-4 py-4">
			<a href="/">
				<h1 className="font-medium">
					Tran<span className="text-blue-400 font-bold">Scribe</span>
				</h1>
			</a>

			<div className="gap-4 flex items-center ">
				<a
					href="https://bmc.link/smoljames"
					target="_blank"
					className="text-slate-600 cursor-pointer"
					rel="noreferrer"
				>
					Donate
				</a>

				<a
					href="/"
					className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 bg-blue-700/70 shadow-xl cursor-pointer"
				>
					<p>New</p>
					<FaPlus />
				</a>
			</div>
		</header>
	);
}
