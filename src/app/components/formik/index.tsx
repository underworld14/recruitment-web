import * as Yup from "yup";

import { Formik } from "formik";
import React from "react";
import _ from "lodash";

export interface IProps {
  onSubmit: any;
  onReset?: any;
}
export interface IState {
  initData: any;
  validator: Yup.ObjectSchema;
  childComp: any;
}

class Index<
  TP extends IProps = IProps,
  TS extends IState = IState
> extends React.Component<TP, TS> {
  protected getInitData(): object {
    console.log("InitData Has empty");
    return null;
  }
  protected getValidator(): Yup.ObjectSchema {
    console.log("Validator Has empty");
    return null;
  }
  protected getChildren(): any {
    console.log("ChildComp Has empty");
    return null;
  }
  initData: any;
  validator: any;
  childComp: any;
  constructor(props: any) {
    super(props);
    this.getInitData = this.getInitData.bind(this);
    this.getValidator = this.getValidator.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.initData = this.getInitData();
    this.validator = this.getValidator();
    this.childComp = this.getChildren();
    this.state = {
      initData: this.initData,
      validator: this.validator,
      childComp: this.childComp,
    } as TS;
  }
  render() {
    const { onSubmit, onReset, ...rest } = this.props;
    const { initData, validator, childComp } = this.state;
    if (_.isEmpty(childComp)) {
      return null;
    } else {
      return (
        <Formik
          initialValues={initData}
          enableReinitialize={true}
          validationSchema={validator}
          onSubmit={onSubmit}
          onReset={onReset}
        >
          {(formikProps) => {
            const myProps = { ...formikProps, ...rest };
            return childComp(myProps);
          }}
        </Formik>
      );
    }
  }
}

export default Index;
