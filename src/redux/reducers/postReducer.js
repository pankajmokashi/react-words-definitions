import {
  ADD_TO_HISTORY,
  SET_CURRENT_SEARCH,
  POST_FETCH_ERROR,
  POST_FETCHING
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  history: [],
  currentSearch: null,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FETCHING:
      return { ...state, loading: true };
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
        error: null,
      };
    case SET_CURRENT_SEARCH:
      return {
        ...state,
        loading: false,
        currentSearch: action.payload,
        error: null,
      };
    case POST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
