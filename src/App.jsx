import HomePage from "./pages/HomePage";
import { GlobalContext } from "./context";

function App() {
	const user = {
		username: "Ilham",
	};
	return (
		<div className="App bg-gray-50 ">
			<GlobalContext.Provider value={user}>
				<div className="container mx-auto p-12">
					<HomePage />
				</div>
			</GlobalContext.Provider>
		</div>
	);
}

export default App;
