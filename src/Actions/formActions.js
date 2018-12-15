import { FETCH_MARKERS, SET_INCOME, SET_SAVINGS } from "../Actions/types";

export const fetchMarkers = () => dispatch => {
  fetch("https://api.myjson.com/bins/1enh3o")
    .then(resp => resp.json())
    .then(markers =>
      dispatch({
        type: FETCH_MARKERS,
        payload: markers.results
      })
    );
};

export const setIncome = value => dispatch => {
  dispatch({
    type: SET_INCOME,
    payload: value
  });
};

export const setSavings = value => dispatch => {
  dispatch({
    type: SET_SAVINGS,
    payload: value
  });
};
