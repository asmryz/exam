import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTest, setStudent } from "../store/Test";

import Test from "./Test";
import Student from "./Student";

const Exam = () => {
	const dispatch = useDispatch();
	const { test, status, student } = useSelector((state) => state.test);

	const assignTest = (test) => {
		dispatch(setTest(test));
	};

	const assignStudent = (student) => {
		dispatch(setStudent(student));
	};

	return (
		<div>
			{status === 0 && <Test setTest={assignTest} />}
			{status > 0 && <Student setStudent={assignStudent} />}
			<pre style={{ textAlign: "left" }}>{JSON.stringify({ status, test, student }, null, 2)}</pre>
		</div>
	);
};

export default Exam;
