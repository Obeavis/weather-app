import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/react-query";
import { ToastContainer } from "react-toastify";
import Home from "@/pages/Home";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Home />
			<ToastContainer position="top-right" autoClose={3000} />
		</QueryClientProvider>
	);
};

export default App;
