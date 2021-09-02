import React from "react";
import { Col, Typography } from "antd";
import CompList from "./list";

const { Title } = Typography;

const Index = () => {
  return (
    <Col sm={24} xl={12} className="background">
      <div>
        <Title level={3} className="text-white">
          Proses Rekrutmen <br /> menjadi lebih cepat <br /> dan hemat
        </Title>
        <div className="list">
          <CompList text="Pre Assesment Question" />
          <CompList text="Tersedia berbagai jenis Assesment" />
          <CompList text="Aplicant Tracking System" />
          <CompList text="Dapat diintegrasikan dengan aplikasi lainya" />
        </div>
      </div>
    </Col>
  );
};
export default React.memo(Index);
