import MyFormik, { IProps, IState } from "app/components/formik";
import initDataProto, { IValues } from "./form_proto";

import CompForm from "./comp_form";
import _ from "lodash";
import validator from "./form_validator";

interface MyProps extends IProps {
  initData?: IValues;
}
interface MyState extends IState {
  initData: IValues;
}

class Index extends MyFormik<MyProps, MyState> {
  protected getChildren() {
    return CompForm;
  }
  protected getValidator() {
    return validator;
  }
  protected getInitData() {
    const { initData } = this.props;
    let result = initDataProto;
    if (!_.isEmpty(initData)) result = initData;
    return result;
  }
}

export default Index;
