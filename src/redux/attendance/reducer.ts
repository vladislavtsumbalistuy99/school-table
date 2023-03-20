import types from '../types';

interface IAttendanceTypes {
  type: string;
  payload: any;
}

const initialState = {
  data: null,
  isLoading: false,
  error: false,
};

const attendance = (state = initialState, { type, payload }: IAttendanceTypes) => {
  switch (type) {
    case types.SET_ATTENDANCE_START:
      return { ...state, isLoading: true };
    case types.SET_ATTENDANCE_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case types.SET_ATTENDANCE_FAILURE:
      return { ...state, column: null, isLoading: false };

    default:
      return state;
  }
};

export default attendance;
