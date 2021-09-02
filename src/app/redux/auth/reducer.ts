import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeReducer, TypeData } from "./types";
import _ from "lodash";

const initialState: TypeReducer = {
  data: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TypeData>) => {
      const getPayload = _.get(action, "payload") || initialState.data;
      state.data = getPayload;
    },
  },
});
export const { setData } = counterSlice.actions;
export default counterSlice.reducer;
