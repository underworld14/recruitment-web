import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";

import styles from "../../style.module.less";

const { Text, Title } = Typography;

const Index = () => {
  return (
    <div className="page-content">
      <Card bodyStyle={{ padding: "2.5rem" }}>
        <Row justify="center">
          <Col xs={22} lg={17}>
            <div className="flex-ver text-center">
              <Title level={3}> Hi Kayana, Selamat Bergabung ! </Title>
              <Text type="secondary">
                Dengan Gawe platform rekrutmen dan online assesment. Anda dapat
                menemukan dan melakukan seleksi kandidat yang memenuhi 100% dari
                keterampilan yang anda butuhkan secara cepat dan efisien
              </Text>
            </div>
          </Col>
        </Row>
        <Row
          justify="space-around"
          align="middle"
          gutter={[0, 16]}
          className="mt30"
        >
          <Col xs={24} xl={6}>
            <Card className={styles.welcomeCard}>
              <div className="flex-ver hor-center text-center">
                <img
                  src="/images/icons/briefcase.png"
                  alt="icon"
                  style={{ width: "100px" }}
                />
                <Text strong className="text-md mt10">
                  Buat Lowongan Pekerjaan
                </Text>
                <Text type="secondary" className="text-xs mt10">
                  Mulailah dengan menciptakan pekerjaan. Selanjutnya
                  publikasikan di papan kerja atau buka secara internal untuk
                  sumber pribadi
                </Text>
                <Button type="primary" className="mt20" block>
                  BUAT LOWONGAN KERJA
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={24} xl={6}>
            <Card className={styles.welcomeCard}>
              <div className="flex-ver hor-center text-center">
                <img
                  src="/images/icons/team.png"
                  alt="icon"
                  style={{ width: "100px" }}
                />
                <Text strong className="text-md mt10">
                  Undang Orang ke Tim Anda
                </Text>
                <Text type="secondary" className="text-xs mt10">
                  Gunakan Gawee untuk mengundang tim Anda untuk memberikan
                  komentar dan umpan balik kandidat
                </Text>
                <Button type="primary" className="mt20" block>
                  UNDANG TIM ANDA
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={24} xl={6}>
            <Card className={styles.welcomeCard}>
              <div className="flex-ver hor-center text-center">
                <img
                  src="/images/icons/people.png"
                  alt="icon"
                  style={{ width: "100px" }}
                />
                <Text strong className="text-md mt10">
                  Temukan Kandidat yang berkualitas
                </Text>
                <Text type="secondary" className="text-xs mt10">
                  Cari jutaan profil untuk menemukan kandidat berdasarkan
                  keahlian kata kunci dan organisasi
                </Text>
                <Button type="primary" className="mt20" block>
                  CARI KANDIDAT
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Index;
