import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';
import types from '../redux/types';

const BASE_URL = 'http://94.131.246.109:5555';
const CLASS_KEY = '2';
const URL = `${BASE_URL}/v1/${CLASS_KEY}`;

export const getStudents = async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: types.SET_STUDENTS_START });
  try {
    const response = await axios.get(`${URL}/Schoolboy`);
    dispatch({ type: types.SET_STUDENTS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: types.SET_STUDENTS_FAILURE });
  }
};

export const getColumns = async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: types.SET_COLUMNS_START });
  try {
    const response = await axios.get(`${URL}/Column`);
    dispatch({ type: types.SET_COLUMNS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: types.SET_COLUMNS_FAILURE });
  }
};

export const getAttendance = async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: types.SET_ATTENDANCE_START });
  try {
    const response = await axios.get(`${URL}/Rate`);
    dispatch({ type: types.SET_ATTENDANCE_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: types.SET_ATTENDANCE_FAILURE });
  }
};

export const postRate = async (dispatch: Dispatch<AnyAction>, studentId: number, columnId: number) => {
  dispatch({ type: types.SET_RATE_START });
  try {
    await axios.post(`${URL}/Rate`, {
      SchoolboyId: studentId,
      ColumnId: columnId,
      Title: 'H',
    });
    dispatch({ type: types.SET_RATE_SUCCESS });
  } catch (e) {
    dispatch({ type: types.SET_RATE_FAILURE });
  }
};

export const postUnRate = async (dispatch: Dispatch<AnyAction>, studentId: number, columnId: number) => {
  dispatch({ type: types.SET_UNRATE_START });
  try {
    const response = await axios.post(`${URL}/UnRate`, {
      SchoolboyId: studentId,
      ColumnId: columnId,
    });
    dispatch({ type: types.SET_UNRATE_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: types.SET_UNRATE_FAILURE });
  }
};
