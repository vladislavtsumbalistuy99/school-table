import { IState } from '../interfaces';

export const columnSelector = (state: IState) => state.columns.data;
export const studentsSelector = (state: IState) => state.students.data;
export const attendanceSelector = (state: IState) => state.attendance.data;

export const columnLoadingSelector = (state: IState) => state.columns.isLoading;
export const studentsLoadingSelector = (state: IState) => state.students.isLoading;
export const attendanceLoadingSelector = (state: IState) => state.attendance.isLoading;
