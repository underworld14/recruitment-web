import React from "react";
import { Row, Col, Typography, Card, Select, Switch, Input } from "antd";

import PublicLayouts from "app/components/layout/public";
import BannerCompany from "./components/banner-company";
import JobList from "./components/jobList";

const { Text } = Typography;
const { Search } = Input;

const jobdata = [
  {
    id: 1,
    title: "Front End Developer",
    category: "IT",
    place: "Jakarta Selatan",
    date: "14 Januari 2020",
  },
  {
    id: 2,
    title: "BackEnd Engineer",
    category: "IT",
    place: "Jakarta Selatan",
    date: "18 Januari 2020",
  },
  {
    id: 3,
    title: "Sales Marketing",
    category: "Logistik",
    place: "Jakarta Selatan",
    date: "18 Januari 2020",
  },
];

const Index: React.FC = () => {
  return (
    <PublicLayouts>
      <BannerCompany />
      <div className="page-content">
        <Row justify="space-between">
          <Col span={4}>
            <Select placeholder="Location" className="full-width">
              <Select.Option value={1}>Jakarta</Select.Option>
              <Select.Option value={2}>Bandung</Select.Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select placeholder="Tipe Pekerjaan" className="full-width">
              <Select.Option value={1}>FullTime</Select.Option>
              <Select.Option value={2}>PartTime</Select.Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select placeholder="Department" className="full-width">
              <Select.Option value={1}>IT</Select.Option>
              <Select.Option value={2}>Non IT</Select.Option>
            </Select>
          </Col>
          <Col span={4}>
            <Switch className="mr10" />
            <Text>Remote Only</Text>
          </Col>
        </Row>
        <Card className="mt25" bodyStyle={{ padding: "2.5rem" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Text strong className="text-md">
                Job Opening
              </Text>
            </Col>
            <Col>
              <Search placeholder="Cari lowongan pekerjaan" />
            </Col>
          </Row>
          <div className="mt30">
            {jobdata.map((data, i) => (
              <JobList key={i} {...data} />
            ))}
          </div>
        </Card>
      </div>
    </PublicLayouts>
  );
};

export default Index;
