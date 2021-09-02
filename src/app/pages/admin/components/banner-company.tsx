import React from "react";
import { Row, Col, Typography, Button } from "antd";
import styles from "../style.module.less";

const { Text } = Typography;

const BannerCompany: React.FC = () => {
  return (
    <div className={styles.bannerTop}>
      <Row justify="space-between" align="middle">
        <Col span={16}>
          <div className="flex-hor ver-center">
            <img src="/images/logo.png" className={styles.logoGawee} />
            <div className="flex-ver">
              <Text strong>PT KAYANA NUSA TEKNOLOGI</Text>
              <Text type="secondary" className="text-xs">
                https://apply.gawee.id/kayana
              </Text>
            </div>
          </div>
        </Col>
        <Col span={3}>
          <Button type="primary"> BUAT LOKER </Button>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(BannerCompany);
