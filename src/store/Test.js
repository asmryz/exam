import { createSlice } from "@reduxjs/toolkit";
//import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";

// const fetchStudents = createAsyncThunk("student/fetchStudents", async () => {
// 	const students = await axios.get(`/api/students`);
// 	return students.data;
// });

// const getStudentByRegNo = createAsyncThunk("student/getStudentByRegNo", async (regno) => {
// 	const student = await axios.get(`/api/students/${regno}`);
// 	return student.data;
// });

// const updateStudent = createAsyncThunk("student/updateStudent", async (student, { dispatch, getState }) => {
// 	const result = await axios.patch(`/api/students/update`, student);
// 	if (result.status === 200) {
// 		dispatch(showUpdated(result.data));
// 		return result.data;
// 	}
// });

const testSlice = createSlice({
  name: "test",
  initialState: {
    test: {},
    student: {},
    status: 0,
  },
  reducers: {
    setTest: (state, action) => {
      const test = action.payload;
      state.test = { ...test };
      state.status++;
    },
    setStudent: (state, action) => {
      const student = action.payload;
      state.student = { ...student };
      state.status++;
    },
  },
  extraReducers: {
    // [fetchStudents.pending]: (state, _) => {
    // 	state.loading = true;
    // 	state.error = null;
    // },
    // [fetchStudents.fulfilled]: (state, action) => {
    // 	console.log(action);
    // 	state.students = action.payload;
    // 	state.loading = false;
    // },
    // [fetchStudents.rejected]: (state, action) => {
    // 	state.loading = false;
    // 	state.error = action.payload;
    // },
    // [getStudentByRegNo.pending]: (state, _) => {
    // 	state.error = null;
    // },
    // [getStudentByRegNo.fulfilled]: (state, action) => {
    // 	console.log(action);
    // 	state.student = action.payload;
    // },
    // [getStudentByRegNo.rejected]: (state, action) => {
    // 	console.log(action);
    // 	state.error = action.payload;
    // },
    // [updateStudent.pending]: (state, _) => {
    // 	state.error = null;
    // },
    // [updateStudent.fulfilled]: (state, action) => {
    // 	const std = action.payload;
    // 	console.log(std);
    // },
    // [updateStudent.rejected]: (state, action) => {
    // 	console.log(action);
    // 	state.error = action.payload;
    // },
  },
});

console.log(JSON.stringify(testSlice, null, 2));

//export { fetchStudents, getStudentByRegNo, updateStudent };
export const { setStudent, setTest } = testSlice.actions;
export default testSlice.reducer;
