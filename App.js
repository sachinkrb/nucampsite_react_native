import React from "react";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import Main from "./components/MainComponent";

console.disableYellowBox = true;

const store = ConfigureStore();
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
