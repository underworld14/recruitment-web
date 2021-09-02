import React from "react";
import { Col, Row, Typography } from "antd";
import CompForm from "./form";
import styles from "../../../style.module.less";

const { Paragraph } = Typography;

interface IProps {
  onSubmit: (values: any) => Promise<any>;
}

const Index: React.FC<IProps> = (props: IProps) => {
  const { onSubmit } = props;
  return (
    <Row align="middle" justify="center" className={styles.authContent}>
      <Col sm={24} xl={8}>
        <Row className="card-simple shadow">
          <Col span={24}>
            <Row justify="center">
              <img src="/images/logo.png" className="logo" />
            </Row>
            <Row justify="center">
              <Col span={18}>
                <Paragraph className="title">Pengaturan Akun Anda</Paragraph>
                <Paragraph className="content">
                  Kami Menggunakan Informasi Ini Untuk Mempermudah Anda
                </Paragraph>
                <CompForm onSubmit={onSubmit} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Index;
