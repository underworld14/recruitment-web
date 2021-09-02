import React from "react";
import { Row, Col, Typography } from "antd";
import styles from "../style.module.less";

const { Text } = Typography;

const BannerCompany: React.FC = () => {
  return (
    <div className={styles.bannerTop}>
      <Row justify="center" align="middle">
        <Col span={4}>
          <img src="/images/logo.png" className={styles.logoGawee} />
        </Col>
        <Col span={16}>
          <div className="flex-ver">
            <Text strong>PT KAYANA NUSA TEKNOLOGI</Text>
            <Text>
              Kayana merupakan perusahaan teknologi terpercaya di Indonesia
              sebagai partner bisnis anda. Dalam menyediakan jasa dan layanan
              kami mengacu pada value perusahaan
            </Text>
          </div>
          <div className="flex-hor hor-between ver-center mt10">
            <div className="flex-ver">
              <Text className="text-xs" type="secondary">
                Bellaza BSA 1st Floor SA1-06
              </Text>
              <Text className="text-xs" type="secondary">
                Jln. Letjen Soeparno, Permata Hijau Jakarta Selatan
              </Text>
            </div>
            <div className="flex-ver">
              <Text className="text-xs" type="secondary">
                http://wwww.kayananusa.com
              </Text>
            </div>
            <div className="flex-ver">
              <Text className="text-xs" type="secondary">
                info@kayananusa@gmail.com
              </Text>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(BannerCompany);
