import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Row, Col, Typography, Button } from "antd";
import { FaMapMarkedAlt, FaRegCalendarAlt } from "react-icons/fa";

const { Text } = Typography;

interface P {
  title: string;
  place: string;
  date: string;
}

const JobList = (props: P) => {
  const history = useHistory();
  return (
    <Card className="mb15" bodyStyle={{ padding: "1rem" }}>
      <Row justify="space-between">
        <Col span={5}>
          <Text strong>
            <Link to="/career/detail">{props.title}</Link>
          </Text>
        </Col>
        <Col span={5}>
          <Text type="secondary" className="text-icon">
            <FaMapMarkedAlt />
            {props.place}
          </Text>
        </Col>
        <Col span={5}>
          <Text type="secondary" className="text-icon">
            <FaRegCalendarAlt /> {props.date}
          </Text>
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={() => history.push("/career/apply")}>
            APPLY
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default React.memo(JobList);
