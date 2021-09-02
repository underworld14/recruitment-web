import React from "react";
import { Row, Col } from "antd";
import CompContent from "./components";
import styles from "../style.module.less";

// page uses the hook
function Page() {
  return (
    <div className="auth">
      <Row align="middle" className={styles.authHeader}></Row>
      <CompContent />
      <Row align="middle" justify="center" className={styles.authFooter}>
        <Col sm={24} lg={20} xl={18}>
          <Row align="middle" justify="end">
            <span className="text-gray">
              @ 2020 Copyright - PT. Kayana Nusa Teknologi
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Page;
