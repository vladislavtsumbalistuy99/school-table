import types from '../types';

interface IColumnsTypes {
  type: string;
  payload: any;
}

const initialState = {
  data: null,
  isLoading: false,
  error: false,
};

const columns = (state = initialState, { type, payload }: IColumnsTypes) => {
  switch (type) {
    case types.SET_COLUMNS_START:
      return { ...state, isLoading: true };
    case types.SET_COLUMNS_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case types.SET_COLUMNS_FAILURE:
      return { ...state, column: null, isLoading: false };

    default:
      return state;
  }
};

export default columns;
