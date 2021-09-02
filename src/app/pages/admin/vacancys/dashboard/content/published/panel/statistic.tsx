import React from "react";
import { Col, Typography } from "antd";

const { Text } = Typography;

const Statistic = ({ title, value }: { title: string; value: string }) => {
  return (
    <Col span={4}>
      <div className="flex-ver ver-center hor-center">
        <Text strong className="text-xl">
          {value}
        </Text>
        <Text type="secondary">{title}</Text>
      </div>
    </Col>
  );
};

export default Statistic;
