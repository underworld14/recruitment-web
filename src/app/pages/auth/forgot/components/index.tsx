import React from "react";
import { Col, Row } from "antd";
import CompDesc from "../../components/desccomp";
import CompMain from "./main";
import styles from "../../style.module.less";

const Index = () => {
  return (
    <Row align="middle" justify="center" className={styles.authContent}>
      <Col sm={24} xl={18}>
        <Row className="card-background">
          <CompMain />
          <CompDesc />
        </Row>
      </Col>
    </Row>
  );
};
export default Index;
