import React from "react";
import { Row, Col, Typography } from "antd";
import styles from "./style.module.less";

const { Text } = Typography;

interface P {
  current: number;
}

const data = [
  {
    title: "Deskripsi Pekerjaan",
    description: "Beritahu Pelamar Mengapa senang bekerja di perusahaan anda",
  },
  {
    title: "Formulir",
    description: "Rancang Formulir aplikasi untuk pekerjaan ini",
  },
  {
    title: "Tim Member",
    description: "Undang rekan kerja untuk berkolaborasi dalam pekerjaan ini",
  },
  {
    title: "WorkFlow Proses",
    description:
      "Buat alur proses rekrutmen seperti tes penilaian, wawancara online",
  },
  {
    title: "Temukan Kandidat",
    description:
      "Buat alur proses rekrutmen seperti tes penilaian, wawancara online",
  },
];

const StepItem = ({
  active,
  title,
  description,
}: {
  active?: boolean;
  title: string;
  description: string;
}) => {
  return (
    <Col sm={6} lg={4} className={styles.colSeparator}>
      <div className={`${styles.stepItem} ${active && styles.active}`}>
        <Text strong className={active && "text-white"}>
          {title}
        </Text>
        <Text type="secondary" className={`text-xs ${active && "text-white"}`}>
          {description}
        </Text>
      </div>
    </Col>
  );
};

const StepHead = () => {
  const current = 0;

  return (
    <Row className="mt20">
      {data.map((data, i) => (
        <StepItem key={i} {...data} active={i === current} />
      ))}
    </Row>
  );
};

export default StepHead;
