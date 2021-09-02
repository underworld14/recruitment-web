import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Cell,
} from "recharts";

const { Text } = Typography;

const data = [
  { name: "Gawee", value: 400 },
  { name: "Company Site", value: 150 },
  { name: "Career Site", value: 200 },
  { name: "Social Media", value: 200 },
];

const colors = ["#3DCC91", "#FFB366", "#FF7373", "#FFCC00", "#3B22FF"];

const Right = () => {
  return (
    <Card>
      <Row justify="start">
        <Text strong>Appliciant Summary</Text>
      </Row>
      <Row className="mt20">
        <Col span={24}>
          <ResponsiveContainer width={"100%"} height={300}>
            <PieChart>
              <Pie data={data} innerRadius={40} dataKey="value" label>
                {data.map((entry, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Card>
  );
};

export default React.memo(Right);
