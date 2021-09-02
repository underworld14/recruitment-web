import React from "react";
import { Row, Col, Typography, Card, Button } from "antd";

import PublicLayouts from "app/components/layout/public";
import BannerCompany from "./components/banner-company";

const { Text } = Typography;

const description = [
  {
    id: 1,
    desc:
      "Melakukan aktifitas memasarkan penjualan, memperkenalkan produk ke toko-toko bangunan",
  },
  { id: 2, desc: "Bertanggung jawab terhadap target penjualan barang" },
  {
    id: 3,
    desc:
      "Melakukan aktifitas memasarkan penjualan, memperkenalkan produk ke toko-toko bangunan",
  },
  { id: 4, desc: "Bertanggung jawab terhadap target penjualan barang" },
];

const cualification = [
  {
    id: 1,
    desc: "Pria Maks Usia 28th",
  },
  {
    id: 2,
    desc: "Pendidikan Min. SMA SMK",
  },
  {
    id: 3,
    desc: "Memiliki SIM C",
  },
  {
    id: 4,
    desc: "Sangup bekerja dengan target",
  },
  {
    id: 5,
    desc: "Energik dan siap untuk kerja mobile atau lapangan",
  },
  {
    id: 6,
    desc: "Memiliki kemampuan komunikasi dengan baik dan responsive",
  },
];

const JobOpen = () => {
  return (
    <PublicLayouts>
      <BannerCompany />
      <div className="page-content">
        <Card bodyStyle={{ padding: "2.5rem" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Text strong>Sales Marketing Manager</Text>
              <Row gutter={10}>
                <Col>
                  <Text className="text-xs">Sales</Text>
                </Col>
                <Col>
                  <Text className="text-xs">South Jakarta, Indonesia</Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Button type="primary"> Login untuk melihat Gaji</Button>
            </Col>
          </Row>
          <Row className="mt15">
            <Col span={5}>
              <div className="flex-ver">
                <Text strong className="text-xs">
                  Due Date
                </Text>
                <Text className="text-xs">13 Juli 2020</Text>
              </div>
            </Col>
            <Col span={5}>
              <div className="flex-ver">
                <Text strong className="text-xs">
                  Jenis Pekerjaan
                </Text>
                <Text className="text-xs">FullTime</Text>
              </div>
            </Col>
            <Col span={5}>
              <div className="flex-ver">
                <Text strong className="text-xs">
                  Pendidikan
                </Text>
                <Text className="text-xs">Sarjana S1</Text>
              </div>
            </Col>
            <Col span={5}>
              <div className="flex-ver">
                <Text strong className="text-xs">
                  Pengalaman Kerja
                </Text>
                <Text className="text-xs">Senior</Text>
              </div>
            </Col>
          </Row>
          <Row className="mt25">
            <Col span={24}>
              <div>
                <Text strong> Front End Developer </Text>
                <ul>
                  {description.map((data, i) => (
                    <li key={i}> {data.desc} </li>
                  ))}
                </ul>
              </div>

              <div className="mt25">
                <Text strong> Kualifikasi </Text>
                <ul>
                  {cualification.map((data, i) => (
                    <li key={i}> {data.desc} </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </PublicLayouts>
  );
};

export default JobOpen;
