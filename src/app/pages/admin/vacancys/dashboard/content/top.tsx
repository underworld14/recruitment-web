import React from "react";
import { Row, Col, Typography, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Top = () => {
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Text strong className="text-lg">
          Lowongan Kerja
        </Text>
      </Col>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default React.memo(Top);
