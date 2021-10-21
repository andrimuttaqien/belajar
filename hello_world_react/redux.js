const redux = require("redux");
const createStore = redux.createStore;
// import {} from redux;

const initialState = {
  value: 0,
  age: 17,
};

//Reducer / Agent
const rootReducer = (state = initialState, action) => {
  console.log(action);
  //   if (action.type === "ADD_AGE") {
  //     return {
  //       ...state,
  //       age: state.age + 1,
  //     };
  //   }
  //   if (action.type === "CHANGE_VALUE") {
  //     return {
  //       ...state,
  //       value: state.value + action.newValue,
  //     };
  //   }
  //   return state;
  switch (action.type) {
    case "CHANGE_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("Store Change", store.getState());
});

// Dispatch Action / Task List
store.dispatch({ type: "CHANGE_VALUE", newValue: +12 });
store.dispatch({ type: "CHANGE_AGE" });
// console.log(store.getState());
