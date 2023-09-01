import "./App.css";
import Prompt from "./components/Prompt";
import SideNav from "./components/SideNav";
import Terminal from "./components/Terminal";
import TopNav from "./components/TopNav";
import WorkFlowProcess from "./components/WorkFlowProcess";

function App() {
	return (
		<div className="App row min-vh-100 w-100 m-0">
			<div className="col-1 p-0" style={{ width: "10%" }}>
				<SideNav />
			</div>
			<div className="col-10 flex-column d-flex justify-content-between p-0" style={{ width: "90%" }}>
				<TopNav />
				<WorkFlowProcess />
				<div className="flex-column">
					<Prompt />
					<Terminal />
				</div>
			</div>
		</div>
	);
}

export default App;
