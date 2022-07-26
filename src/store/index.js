import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import test from "./Test";

const reducer = combineReducers({
	test,
});

const store = configureStore({
	reducer,
});

export default store;
