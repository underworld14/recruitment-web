import React, { useState } from "react";
import { Row, Col, Typography, Card } from "antd";

import PublicLayouts from "app/components/layout/public";
import BannerCompany from "../components/banner-company";
import FormComp from "./form";
import FinishApply from "./finish";

const { Text } = Typography;

const Index = () => {
  const [isSubmited, setisSubmited] = useState(false);

  const onSubmit = (values: any) => {
    setisSubmited(true);
  };

  if (isSubmited) return <FinishApply />;
  return (
    <PublicLayouts>
      <BannerCompany />
      <div className="page-content">
        <Card bodyStyle={{ padding: "2.5rem" }}>
          <Row>
            <Col>
              <Text strong>Sales Marketing Manager</Text>
              <Row gutter={10}>
                <Col>
                  <Text className="text-xs">Sales</Text>
                </Col>
                <Col>
                  <Text className="text-xs">South Jakarta, Indonesia</Text>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt20">
            <Col span={24}>
              <FormComp onSubmit={onSubmit} />
            </Col>
          </Row>
        </Card>
      </div>
    </PublicLayouts>
  );
};

export default Index;
