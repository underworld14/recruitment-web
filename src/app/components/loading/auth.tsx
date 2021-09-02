import { Col, Row, Spin, Typography } from "antd";

import React from "react";

const Index = () => {
  return (
    <Row className="f-hg-vh" align="middle" justify="center">
      <Spin spinning={true} tip="Is Loading ..." />
    </Row>
  );
};

export default Index;
