import React, { useEffect, useState } from "react";
import Tick from "../static/tick.svg";
import Coffee from "../static/coffee.webp";
import Universe from "../static/universe.webp";

const WorkFlowProcess = (props) => {
	return (
		<div className="container py-3 d-flex flex-grow-1 flex-column justify-content-start align-items-start">
			<WorkFlow appName="Slack" actionName="Add a user" status="done" />
			{/* <WorkFlow appName="Slack" actionName="Add a user" status="done" /> */}
		</div>
	);
};

const WorkFlow = (props) => {
	return (
		<div className="bg-primary-subtle w-100 rounded p-3">
			<div className="row">
				<div className="col-7 px-4">
					<div className="bg-white px-0  p-3 rounded my-1 row">
						<div className="col p-0">App Name:</div>
						<div className="col p-0 uppercase fw-semibold">{props.appName}</div>
					</div>
					<div className="bg-white  p-3 px-0 rounded my-1 row">
						<div className="col p-0">Action Name:</div>
						<div className="col p-0 uppercase fw-semibold">{props.actionName}</div>
					</div>
					<div className="bg-white p-3  px-0 rounded my-1 row">
						<div className="col p-0">Status:</div>
						<div className="col p-0 uppercase fw-semibold">{props.status}</div>
					</div>
				</div>
				<div className="col-5 d-flex flow-column justify-content-center align-items-center">
					<SuccessLoader />
				</div>
			</div>
		</div>
	);
};

function SuccessLoader() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const loaderText = [
		{
			text: "Giving the AI its morning coffee...",
			image: Coffee,
		},
		{
			text: "Searching the multAIverse for available actions..",
			image: Universe,
		},
	];

	const typingSpeed = 150;
	const pauseDuration = 1000; // 1 second pause after typing

	// Calculate the time it takes to type out the current text
	const currentTextDuration = loaderText[currentIndex].text.length * typingSpeed + pauseDuration;

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % loaderText.length);
		}, currentTextDuration);

		return () => clearInterval(interval);
	}, [currentIndex]);

	const e = loaderText[currentIndex];

	return (
		<div className="d-flex flex-row justify-content-start align-items-center">
			<img src={e.image} className="w-25 h-25" alt="Loader Image" />
			<Typewriter inputText={e.text} typingSpeed={typingSpeed} />
		</div>
	);
}

function Typewriter({ inputText, typingSpeed = 100, pauseDuration = 1000 }) {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < inputText.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prevText) => prevText + inputText[index]);
				setIndex((prevIndex) => prevIndex + 1);
			}, typingSpeed);

			return () => clearTimeout(timeout);
		} else {
			// Once the entire text has been displayed, pause for a while and then reset to start over
			const pauseTimeout = setTimeout(() => {
				setDisplayedText("");
				setIndex(0);
			}, pauseDuration);

			return () => clearTimeout(pauseTimeout);
		}
	}, [inputText, typingSpeed, index, pauseDuration]);

	return <span>{displayedText}</span>;
}

export default WorkFlowProcess;
