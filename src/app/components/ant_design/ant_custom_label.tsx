import _ from "lodash";
import { Col } from "antd";
import React from "react";
import Asterisk from "app/components/other/asterisk";

interface IPropsLabel {
  label: string;
  span?: number;
  noReq?: boolean;
}
const Index: React.FC<IPropsLabel> = (props: IPropsLabel) => {
  const { label } = props;
  const span = _.get(props, "span") | 8;
  return (
    <Col span={span}>
      {!props.noReq && <Asterisk />}
      {label}
    </Col>
  );
};
export default Index;
