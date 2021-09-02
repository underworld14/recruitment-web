import { Row, Typography } from "antd";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const { Paragraph } = Typography;

interface IProps {
  text: string;
}

const Index: React.FC<IProps> = (props: IProps) => {
  return (
    <Paragraph className="text-white">
      <Row align="middle">
        <FiCheckCircle />
        {props.text}
      </Row>
    </Paragraph>
  );
};
export default Index;
