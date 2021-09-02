import { Col, Row } from "antd";
import React from "react";
import CompDesc from "../../../components/desccomp";
import CompMain from "./main";
import styles from "../../../style.module.less";

interface IProps {
  onSubmit: (values: any) => any;
}

class Index extends React.Component<IProps, any> {
  render() {
    const { onSubmit } = this.props;
    return (
      <Row align="middle" justify="center" className={styles.authContent}>
        <Col sm={24} lg={18}>
          <Row className="card-background">
            <CompDesc />
            <CompMain onSubmit={onSubmit} />
          </Row>
        </Col>
      </Row>
    );
  }
}
export default Index;
