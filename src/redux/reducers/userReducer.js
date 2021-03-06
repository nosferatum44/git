import { createActions, handleActions } from 'redux-actions';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  data: null,
  isError: null,
};

export const actionCreators = createActions({
  USER: {
    SIGNIN: {
      REQUEST: () => {},
      SUCCESS: (data) => data,
      FAILURE: () => {},
    },
    SIGNOUT: () => {},
  },
});

export default handleActions(
  {
    USER: {
      SIGNIN: {
        REQUEST: (state) => ({ ...state, isLoading: true, isError: null }),
        SUCCESS: (state, action) => {
          return {
            ...state,
            data: action.payload,
            isLoggedIn: true,
            isLoading: false,
          };
        },
        FAILURE: () => ({
          isLoggedIn: false,
          isLoading: false,
          data: null,
          isError: true,
        }),
      },
      SIGNOUT: (state) => ({ ...state, isLoggedIn: false }),
    },
  },
  initialState
);
