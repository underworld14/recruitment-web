import React from "react";
import { Col, Row } from "antd";
import CompDesc from "../../components/desccomp";
import CompMain from "./main";
import styles from "../../style.module.less";

const Index = () => {
  return (
    <Row align="middle" justify="center" className={styles.authContent}>
      <Col xs={24} lg={20} xl={18}>
        <Row className="card-background">
          <CompMain />
          <CompDesc />
        </Row>
      </Col>
    </Row>
  );
};
export default Index;
