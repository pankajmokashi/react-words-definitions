import { POST_FETCHING, ADD_TO_HISTORY, SET_CURRENT_SEARCH, POST_FETCH_ERROR } from './actionTypes';
import axios from 'axios';

export const postFetching = () => {
  return {
      type: POST_FETCHING
  }
}

export const addToHistory = (word) => {
    return {
      type: ADD_TO_HISTORY,
      payload: word,
    };
  };
  
export const setCurrentSearch = (wordData) => {
    return {
      type: SET_CURRENT_SEARCH,
      payload: wordData,
    };
  };

export const postFetchError = (error) => {
    return {
      type: POST_FETCH_ERROR,
      payload: error,
    };
  };

export const fetchWordData = (word) => {
  return function(dispatch){
    dispatch(postFetching(true));
    setTimeout(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        dispatch(postFetching(false));
        const wordData = response.data;
        dispatch(setCurrentSearch(wordData));
      })
      .catch((error) => {
        dispatch(postFetchError(error));
        dispatch(postFetching(false));
      });
    }, 800)
  };
};
