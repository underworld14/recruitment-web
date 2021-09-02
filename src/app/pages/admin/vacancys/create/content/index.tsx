import React from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Form,
  Input,
  Select,
  Space,
  Button,
} from "antd";
import { InfoCircleTwoTone } from "@ant-design/icons";

import StepHead from "./step-head";
import styles from "./style.module.less";

import Top from "./top";

const { Text, Paragraph } = Typography;

const Index = () => {
  return (
    <div className="page-content">
      <Top />
      <Row className="mt20">
        <Col span={24}>
          <Card bodyStyle={{ padding: "1.5rem 2rem" }}>
            <Row justify="end">
              <Space>
                <Button danger>Save Draft</Button>
                <Button type="primary">Save & Continue</Button>
              </Space>
            </Row>
            <StepHead />
          </Card>
        </Col>
        <Col span={24}>
          <div className={styles.formsectionDivider}>
            <Text strong>INFORMASI UMUM</Text>
          </div>
        </Col>
        <Col span={24}>
          <Card bodyStyle={{ padding: "1.5rem 2rem" }}>
            <Form layout="vertical">
              <Row align="middle" justify="space-between">
                <Col span={18}>
                  <Form.Item label="Judul Pekerjaan" name="title">
                    <Input placeholder="ex: Full Stack Developer" />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <div className="flex-hor">
                    <InfoCircleTwoTone />
                    <Text className="text-xxs mt5">
                      Gunakan Judul Pekerjaan Umum misalnya: "Sales Marketing",
                      bukan "butuh sales marketing", Pelajari lebih lanjut !
                    </Text>
                  </div>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={9}>
                  <Form.Item label="Department" name="department">
                    <Select>
                      <Select.Option value="1">IT</Select.Option>
                      <Select.Option value="2">NON IT</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={9}>
                  <Form.Item label="Jenis Pekerjaan" name="jobtype">
                    <Select>
                      <Select.Option value="1">Full Time</Select.Option>
                      <Select.Option value="2">Partime</Select.Option>
                      <Select.Option value="2">Remote</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={9}>
                  <Form.Item label="Negara" name="country">
                    <Select>
                      <Select.Option value="1">Indonesia</Select.Option>
                      <Select.Option value="2">Malaysia</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={9}>
                  <Form.Item label="Kota & KOde Pos" name="city">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={9}>
                  <Form.Item label="Pendidikan" name="education">
                    <Select>
                      <Select.Option value="1">SD</Select.Option>
                      <Select.Option value="2">SMP</Select.Option>
                      <Select.Option value="3">SMA</Select.Option>
                      <Select.Option value="4">Sarjana</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={9}>
                  <Form.Item label="Pengalaman" name="experience">
                    <Select>
                      <Select.Option value="1">Junior Level</Select.Option>
                      <Select.Option value="2">Mid Level</Select.Option>
                      <Select.Option value="2">Senior Level</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={9}>
                  <Form.Item label="Cover Image" name="cover">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={9}>
                  <Form.Item label="Kata Kunci" name="keyword">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={24}>
          <div className={styles.formsectionDivider}>
            <Text strong>DESKRIPSI</Text>
          </div>
        </Col>
        <Col span={24}>
          <Card bodyStyle={{ padding: "1.5rem 2rem" }}>
            <Form layout="vertical">
              <Row>
                <Col span={18}>
                  <Form.Item label="Deskripsi" name="description">
                    <Input.TextArea rows={3} />
                  </Form.Item>
                </Col>
              </Row>
              <Row align="middle" justify="space-between">
                <Col span={18}>
                  <Form.Item label="Kebutuhan Kompentensi" name="Needs">
                    <Select mode="tags" className="full-width">
                      <Select.Option value="1">
                        Menguasai Framework Laravel
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <div className="flex-hor">
                    <InfoCircleTwoTone />
                    <Text className="text-xxs mt5">
                      Kamus kompetensi yang dibutuhkan untuk posisi jabatan pada
                      lowongan pekerjaan ini, Pelajari lebih lanjut !
                    </Text>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={18}>
                  <Form.Item label="Kebutuhan Kompentensi" name="needs">
                    <Input.TextArea rows={3} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
