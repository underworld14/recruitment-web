import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";

import VacancyList from "./vacancy-list";

const { Text } = Typography;

const VacancyCard = () => {
  return (
    <Card>
      <Row justify="space-between" align="middle">
        <Col>
          <div className="flex-ver">
            <Text strong>Lowongan Kerja Popular</Text>
            <Text type="secondary" className="text-xs">
              1 Bulan Terakhir
            </Text>
          </div>
        </Col>
        <Col>
          <Button danger> Lihat Semua </Button>
        </Col>
      </Row>
      <Row className="mt20">
        <Col span={24}>
          <VacancyList />
          <VacancyList />
          <VacancyList />
          <VacancyList />
          <VacancyList />
        </Col>
      </Row>
    </Card>
  );
};

const Index = () => {
  return (
    <Row gutter={[20, 20]} className="mt10">
      <Col xs={24} xl={8}>
        <VacancyCard />
      </Col>
      <Col xs={24} xl={8}>
        <VacancyCard />
      </Col>
      <Col xs={24} xl={8}>
        <VacancyCard />
      </Col>
    </Row>
  );
};

export default Index;
