import types from '../types';

interface IRateTypes {
  type: string;
  payload: any;
}

const initialState = {
  data: null,
  isLoading: false,
  error: false,
};

const rate = (state = initialState, { type, payload }: IRateTypes) => {
  switch (type) {
    case types.SET_RATE_START:
      return { ...state, isLoading: true };
    case types.SET_RATE_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case types.SET_RATE_FAILURE:
      return { ...state, column: null, isLoading: false };

    case types.SET_UNRATE_START:
      return { ...state, isLoading: true };
    case types.SET_UNRATE_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case types.SET_UNRATE_FAILURE:
      return { ...state, column: null, isLoading: false };

    default:
      return state;
  }
};

export default rate;
