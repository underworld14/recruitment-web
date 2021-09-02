import React from "react";
import { Typography, Row, Col, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import gstyle from "../style.module.less";
import lstyle from "./style.module.less";

const { Paragraph } = Typography;
// page uses the hook
function Page() {
  const history = useHistory();
  return (
    <div className="error-404">
      <Row align="middle" className={gstyle.authHeader}></Row>
      <Row align="middle" justify="center" className={gstyle.authContent}>
        <Col sm={24} xl={8}>
          <Row className={`${lstyle.card} shadow`}>
            <Col span={24} className={lstyle.top}>
              <Row justify="center">
                <img src="/images/logo.png" className={lstyle.logo} />
              </Row>
              <Paragraph className={lstyle.title} type="secondary">
                Error 404
              </Paragraph>
              <Paragraph className={lstyle.content}>
                Ups. The Site Is Notfound.
              </Paragraph>
              <Row justify="center">
                <Button
                  type="primary"
                  icon={<ArrowLeftOutlined />}
                  onClick={() => history.push("/")}
                >
                  Back To Main Page
                </Button>
              </Row>
            </Col>
            <Col span={24} className={lstyle.bottom}>
              <Paragraph className={lstyle.footer} type="secondary">
                @ 2020 Copyright - PT. Kayana Nusa Teknologi
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row align="middle" justify="center" className={gstyle.authFooter}>
        <Col sm={24} xl={18}>
          <Row align="middle" justify="end"></Row>
        </Col>
      </Row>
    </div>
  );
}
export default Page;
