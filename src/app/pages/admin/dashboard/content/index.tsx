import React from "react";
import { Row, Col, Card } from "antd";

import BarChart from "./bar-chart";
import PieChart from "./pie-chart";
import Vacancy from "./vacancy";

const Index = () => {
  return (
    <div className="page-content">
      <Row gutter={[20, 20]}>
        <Col xs={24} xl={16}>
          <BarChart />
        </Col>
        <Col xs={24} xl={8}>
          <PieChart />
        </Col>
      </Row>
      <Vacancy />
    </div>
  );
};

export default Index;
