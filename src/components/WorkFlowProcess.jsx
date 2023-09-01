import React, { useEffect, useState } from "react";
import Tick from "../static/tick.svg";

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
					{/* <img src={Tick} style={{ height: "100px" }} /> */}
					{/* <Loader /> */}
					<div>
						{/* <h1>Loading</h1> */}
						<Typewriter inputText="khdksdskjfjknsdjk" />
					</div>
				</div>
			</div>
		</div>
	);
};

function Loader() {
	const loaderStyle = {
		display: "inline-block",
		width: "50px",
		height: "50px",
		border: "5px solid rgba(255, 255, 255, 0.3)", // Light gray
		borderTop: "5px solid #000", // Black
		borderRadius: "50%",
		animation: "spin 1s linear infinite",
	};

	return <div style={loaderStyle}></div>;
}

function Typewriter({ inputText, typingSpeed = 100 }) {
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		let index = 0;

		const interval = setInterval(() => {
			if (index < inputText.length) {
				setDisplayedText((prevText) => prevText + inputText[index]);
				index++;
			} else {
				clearInterval(interval);
			}
		}, typingSpeed);

		return () => clearInterval(interval);
	}, [inputText, typingSpeed]);

	return <span>{displayedText}</span>;
}

export default WorkFlowProcess;
