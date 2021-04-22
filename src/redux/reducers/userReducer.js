import { createActions, handleActions } from 'redux-actions';

const initialState = {
  isLoading: false,
  isLoggedIn: null,
  data: null,
  error: null,
};

export const actionCreators = createActions({
  USER: {
    SUCCESS: (data) => data,
    FAILURE: (error) => error,
    REQUEST: () => {},
  },
});

export default handleActions(
  {
    USER: {
      REQUEST: (state) => ({ ...state, isLoading: true }),
      SUCCESS: (state, action) => {
        return {
          ...state,
          data: action.payload,
          isLoggedIn: true,
          isLoading: false,
        };
      },
      FAILURE: (state, action) => ({
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payload,
      }),
    },
  },
  initialState
);
