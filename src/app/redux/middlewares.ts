import logger from "redux-logger";
import reduxThunk from "redux-thunk";

const middlewares = (isDev: boolean): Array<any> => {
  let tmpMiddleware: Array<any> = [reduxThunk];
  if (isDev) {
    tmpMiddleware = [...tmpMiddleware, logger];
  }
  return tmpMiddleware;
};
export default middlewares;
