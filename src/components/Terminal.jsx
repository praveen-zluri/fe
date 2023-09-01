import React, { useEffect, useState } from "react";
import ZluriSVG from "../static/zluri.svg";

const Terminal = () => {
	return (
		<div className="w-100 bg-dark">
			<Collapsible>
				<p>Your content goes here. This can be any element or component.</p>
			</Collapsible>
		</div>
	);
};

function Collapsible(props) {
	const [isOpen, setIsOpen] = useState(false)

	const contentBaseStyle = {
		overflow: "hidden",
		transition: "height 0.3s ease-in-out",
		height: 0,
	};

	const contentOpenStyle = {
        height: "150px"
	};

	return (
		<div>
			<div className="w-100 text-start text-white px-4" onClick={() => setIsOpen(!isOpen)}>
				TERMINAL {">"}
			</div>
			<div style={isOpen ? { ...contentBaseStyle, ...contentOpenStyle } : contentBaseStyle}>{props.children}</div>
		</div>
	);
}

export default Terminal;
