import { combineReducers } from "redux";

const ListProductsReducer = (state = [], action) => {
  if (action.type === "ambilData") {
    return action.data;
  }
  return state;
};
export default combineReducers({
  listProducts: ListProductsReducer,
});
