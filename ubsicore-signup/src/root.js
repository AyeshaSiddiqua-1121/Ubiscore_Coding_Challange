import React from "react";
import { Provider } from "react-redux";
import rootReducer from "./redux/RootReducer";
import thunk from "redux-thunk";
import createDebounce from "redux-debounced";
import { createStore, applyMiddleware, compose } from "redux";
function Root(props) {
  // ** init middleware
  const middleware = [thunk, createDebounce()];

  // ** Dev Tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
  );

  return (
    <>
      <Provider store={store}>{props.children}</Provider>
    </>
  );
}
export default Root;
