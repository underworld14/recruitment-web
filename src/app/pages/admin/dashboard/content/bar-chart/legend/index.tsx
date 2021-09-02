import React from "react";
import { Row, Col } from "antd";
import LegendItem from "./legend-item";

const Index = () => {
  return (
    <Row className="mt10" justify="space-around" align="middle">
      <Col span={5}>
        <LegendItem
          title="Total Appliciants"
          value="32.000"
          color="lightgray"
        />
      </Col>
      <Col span={5}>
        <LegendItem
          title="Qualified Appliciants"
          value="16.000"
          color="lightblue"
        />
      </Col>
      <Col span={5}>
        <LegendItem
          title="Disqualified Appliciants"
          value="1.000"
          color="coral"
        />
      </Col>
    </Row>
  );
};

export default Index;
