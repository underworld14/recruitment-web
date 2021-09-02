import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import data from "./data";
import LegendComp from "./legend";

const { Text } = Typography;

const Index = () => {
  return (
    <Card>
      <Row justify="start">
        <Text strong>Appliciant Summary</Text>
      </Row>
      <Row className="mt20">
        <Col span={24}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#8884d8" />
              <Bar dataKey="qualified" fill="#82ca9d" />
              <Bar dataKey="disqualified" fill="#FFCC00" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
      <LegendComp />
    </Card>
  );
};

export default React.memo(Index);
