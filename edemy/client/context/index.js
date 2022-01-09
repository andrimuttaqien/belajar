// // 1. Import
// import { useReducer, createContext, useEffect } from "react";

// // 2. Set initial state
// const initialState = {
//   user: null,
// };

// // 3. Create context
// const Context = createContext();

// // 4. Create reducer
// const rootReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, user: action.payload };
//     case "LOGOUT":
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// };

// // 5. Context provider
// const Provider = ({ children }) => {
//   const [state, dispatch] = useReducer(rootReducer, initialState);
//   useEffect(() => {
//     dispatch({
//       type: "LOGIN",
//       payload: JSON.parse(window.localStorage.getItem("user")),
//     });
//   }, []);
//   return (
//     <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
//   );
// };

// // 6. Export context (Context Provider)
// export { Context, Provider };

import { useReducer, createContext, useEffect } from "react";

// initial state
const intialState = {
  user: null,
};

// create context
const Context = createContext();

// root reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, intialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: "LOGOUT",
      payload: { user: null },
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
