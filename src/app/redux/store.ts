import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "app/redux/root_reducers";
import myMiddleware from "app/redux/middlewares";

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware(),
    ...myMiddleware(process.env.NODE_ENV === "development"),
  ],
});
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./root_reducers", () => {
    const newRootReducer = require("./root_reducers").default;
    store.replaceReducer(newRootReducer);
  });
}
export type AppDispatch = typeof store.dispatch;
export default store;
