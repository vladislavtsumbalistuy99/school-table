import types from '../types';

interface IStudentsTypes {
  type: string;
  payload: any;
}

const initialState = {
  data: null,
  isLoading: false,
  error: false,
};

const students = (state = initialState, { type, payload }: IStudentsTypes) => {
  switch (type) {
    case types.SET_STUDENTS_START:
      return { ...state, isLoading: true };
    case types.SET_STUDENTS_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case types.SET_STUDENTS_FAILURE:
      return { ...state, column: null, isLoading: false };

    default:
      return state;
  }
};

export default students;
