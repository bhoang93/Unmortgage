import { FETCH_MARKERS, SET_INCOME, SET_SAVINGS } from "../Actions/types";

const initialState = {
  income: "",
  savings: "",
  markers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKERS:
      return {
        ...state,
        markers: action.payload
      };
    case SET_INCOME:
      return {
        ...state,
        income: action.payload
      };
    case SET_SAVINGS:
      return {
        ...state,
        savings: action.payload
      };
    default:
      return state;
  }
};
