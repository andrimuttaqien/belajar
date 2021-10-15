import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import App from "./components/App";
// Komponen penghubung react ke redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

export default function Home() {
  const middleware = [];
  return (
    <Provider
      store={createStore(
        reducers,
        composeWithDevTools(applyMiddleware(...middleware))
        // other store enhancers if any
      )}
    >
      <App />
    </Provider>
  );
}
