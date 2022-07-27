import React from "react";
//import { useEffect } from "react";
import "./App.css";
import Exam from "./components/Exam";
//import Example from "./components/Example";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function App() {
	return <Exam />;
}

// eslint-disable-next-line
export default () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
