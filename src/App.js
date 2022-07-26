import React from "react";
//import { useEffect } from "react";
import "./App.css";
import Exam from "./components/Exam";
import store from "./store";
import { Provider } from "react-redux";

function App() {
	return <Exam />;
}

// eslint-disable-next-line
export default () => (
	<Provider store={store}>
		<App />
	</Provider>
);
