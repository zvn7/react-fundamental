import HomePage from "./pages/HomePage";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
	const user = {
		username: "Ilham",
	};
	return (
		<div className="App bg-gray-50 ">
			<div className="container mx-auto p-12">
				<GlobalContext.Provider value={user}>
					<RouterProvider router={router} />
				</GlobalContext.Provider>
			</div>
		</div>
	);
}

export default App;
