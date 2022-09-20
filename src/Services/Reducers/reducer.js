import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
  cardData: [],
};

export const cardItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer", action);
      return [...state, { cardData: action.data }];
      break;
    case REMOVE_TO_CART:
      // console.log(" remove reducer", action);
      state.pop();
      return [...state];
      break;
    default:
      return state;
  }
};
