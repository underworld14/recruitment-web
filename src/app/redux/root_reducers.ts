import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "app/redux/auth";
import { TypeReducer as TypeCounter } from "app/redux/auth/types";

interface IRootState {
  counter: TypeCounter;
}

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = IRootState;

export default rootReducer;
