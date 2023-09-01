import React, { useEffect, useState } from "react";
import axios from "axios";

const Prompt = () => {
	const [prompt, setPrompt] = useState("");
	// const [prompt, setPrompt] = useState('');

	useEffect(() => {
		if (prompt.length > 10) {
			console.log(`prompt: `, prompt);
		}
	}, [prompt]);

	function sendPrompt(prompts) {
		console.log(`after clicking on send btn: `, prompts);
		axios
			.get("data.json")
			.then((res) => console.log(`res: `, res))
			.catch((err) => console.log(`err: `, err));
	}

	return (
		<div className="d-flex flex-row w-100 justify-content-center bg-primary-subtle p-2">
			<textarea
				name="prompt"
				id="prompt-main"
				placeholder="Enter a prompt here"
				onChange={(e) => {
					e.preventDefault();
					setPrompt(e.target.value);
				}}
				className="flex-grow-1 form-control border-0"
			></textarea>
			&nbsp;
			<button className="btn btn-primary" onClick={() => sendPrompt(prompt)}>
				Send
			</button>
		</div>
	);
};

export default Prompt;
