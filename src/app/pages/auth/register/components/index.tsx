import React from "react";
import CompStep1 from "./step1";
import CompStep2 from "./step2";
import CompStep3 from "./step3";
import CompStep4 from "./step4";
import { message } from "antd";

interface IState {
  step: number;
  data: any;
}

class Index extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      step: 1,
      data: {},
    } as IState;
  }
  onSubmitStep1 = async (values: any) => {
    message.success("Submitted Step 1");
    this.setState({ step: 2 });
  };
  onSubmitStep2 = async (values: any) => {
    message.success("Submitted Step 2");
    this.setState({ step: 3 });
  };
  onSubmitStep3 = async (values: any) => {
    message.success("Submitted Step 3");
    this.setState({ step: 4 });
  };
  render() {
    const { onSubmitStep1, onSubmitStep2, onSubmitStep3 } = this;
    const { step, data } = this.state;
    let Comp = <CompStep1 onSubmit={onSubmitStep1} />;
    switch (step) {
      case 1:
        Comp = <CompStep1 onSubmit={onSubmitStep1} />;
        break;
      case 2:
        Comp = <CompStep2 onSubmit={onSubmitStep2} />;
        break;
      case 3:
        Comp = <CompStep3 onSubmit={onSubmitStep3} />;
        break;
      case 4:
        Comp = <CompStep4 />;
        break;
      default:
        break;
    }
    return Comp;
  }
}
export default Index;
