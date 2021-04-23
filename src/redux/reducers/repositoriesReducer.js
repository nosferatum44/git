import { createActions, handleActions } from 'redux-actions';

const initialState = {
  isLoading: false,
  data: null,
  isError: null,
};

export const actionCreators = createActions({
  REPOSITORIES: {
    GET: {
      REQUEST: () => {},
      SUCCESS: (data) => data,
      FAILURE: (error) => error,
    },
  },
});

export default handleActions(
  {
    REPOSITORIES: {
      GET: {
        REQUEST: (state) => ({ ...state, isLoading: true, isError: null }),
        SUCCESS: (state, action) => {
          return {
            ...state,
            data: action.payload,
            isLoading: false,
          };
        },
        FAILURE: (state) => ({
          isLoading: false,
          data: null,
          isError: true,
        }),
      },
    },
  },
  initialState
);
