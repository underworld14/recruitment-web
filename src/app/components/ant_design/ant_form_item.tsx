import { Form } from "antd";
import React from "react";
import TextLabel from "./private_label";
import _ from "lodash";

interface IItemWrapper {
  className?: string;
  noReq?: boolean;
  colon?: boolean;
  layoutCol?: {
    labelCol: any;
    wrapperCol: any;
  };
  label?: string;
  labelAlign?: "left" | "right";
  children: any;
}
const AntFormItemWrapper = (props: IItemWrapper) => {
  const { children, layoutCol } = props;
  let { className } = props;
  if (!className) className = "mb0";
  let isReq = true;
  let colon = false;
  let label: any = null;
  const labelAlign: "left" | "right" = _.get(props, "labelAlign") || "right";
  if (_.get(props, "noReq")) isReq = false;
  if (_.get(props, "label"))
    label = TextLabel({ label: props.label, isRequired: isReq });
  if (_.get(props, "colon")) colon = true;
  return (
    <Form.Item
      labelAlign={labelAlign}
      colon={colon}
      label={label}
      className={className}
      {...layoutCol}
    >
      {children}
    </Form.Item>
  );
};
export default AntFormItemWrapper;
