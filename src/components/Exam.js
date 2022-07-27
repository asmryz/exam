import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTest, setStudent, setStatus, setBank } from "../store/Test";

import Conduct from "./Conduct";
import Student from "./Student";

const Exam = () => {
	const dispatch = useDispatch();
	const { test, status, student, shuffle, bank } = useSelector((state) => state.test);

	const assignTest = (test) => {
		dispatch(setTest(test));
		dispatch(setStatus(1));
	};

	const assignStudent = (student) => {
		dispatch(setStudent(student));
		if (status === 1) {
			dispatch(setStatus(1));
		}
	};

	const assignBank = (bank) => {
		dispatch(setBank(bank));
	};

	return (
		<div>
			{status === 0 && <Conduct setTest={assignTest} />}
			{status > 0 && <Student setStudent={assignStudent} setBank={assignBank} status={status} student={student} testid={test.testid} />}
			<pre style={{ textAlign: "left" }}>{JSON.stringify({ status, test, student, bank, shuffle }, null, 2)}</pre>
		</div>
	);
};

export default Exam;
