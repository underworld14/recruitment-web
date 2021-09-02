import React from "react";
import { Col, Row, Typography, Progress } from "antd";
import styles from "../../../style.module.less";

const { Paragraph } = Typography;

const Index: React.FC<any> = (props: any) => {
  return (
    <Row align="middle" justify="center" className={styles.authContent}>
      <Col sm={24} xl={8}>
        <Row className="card-simple shadow">
          <Col span={24}>
            <Row justify="center" className="mb50">
              <img src="/images/logo.png" className="logo" />
            </Row>
            <Row justify="center">
              <Col span={18}>
                <Row justify="center">
                  <div className="mb50">
                    <Paragraph className="title text-center">
                      Pengaturan Akun Anda
                    </Paragraph>
                    <Paragraph className="content text-center">
                      Kami Menggunakan Informasi Ini Untuk Mempermudah Anda
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph type="secondary" className="text-xs text-center">
                      Proses Ini Munkin Membutuhkan Waktu Beberapa Detik
                    </Paragraph>
                    <Progress percent={70} status="normal" showInfo={false} />
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Index;
