import React, { useEffect, useState } from "react";
import ZluriSVG from "../static/zluri.svg";

const SideNav = () => {
	return (
		<ul className="nav flex-column bg-primary h-100 py-3 row-gap-2">
			<li className="nav-item text-center w-auto">
				<img src={ZluriSVG} />
			</li>
			<ul className="nav flex-column p-2 row-gap-2">
				<li className="nav-item">
					<PlaceHolder />
				</li>
				<li className="nav-item">
					<PlaceHolder />
				</li>
				<li className="nav-item">
					<PlaceHolder />
				</li>
			</ul>
		</ul>
	);
};

function PlaceHolder() {
	return (
		<div className="w-100 bg-primary-subtle rounded p-1">
			<div className="opacity-0">Example</div>
		</div>
	);
}

export default SideNav;
