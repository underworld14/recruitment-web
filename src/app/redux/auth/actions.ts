import { setData as setterData } from "./reducer";
import { RootState } from "app/redux/root_reducers";
const increment = (number) => {
  return async (dispatch, getState: () => RootState) => {
    await setTimeout(() => {
      const { counter } = getState();
      const data = counter.data + 1;
      dispatch(setterData(data));
    }, 500);
  };
};
const decrement = (number) => {
  return async (dispatch, getState: () => RootState) => {
    const { counter } = getState();
    const data = counter.data - 1;
    dispatch(setterData(data));
  };
};
const reset = () => {
  return async (dispatch, getState) => {
    dispatch(setterData(0));
  };
};
export { increment, decrement, reset };
