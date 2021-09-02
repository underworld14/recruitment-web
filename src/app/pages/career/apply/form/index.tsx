import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Upload,
  Button,
  Radio,
} from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { formLayout, layout2 } from "./layout";
import { Rule } from "antd/lib/form";

const genderOpt = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const experienceOpt = [
  { label: "< 0 Years", value: 0 },
  { label: "1 Years", value: 1 },
  { label: "2-3 Years", value: 3 },
  { label: "4-6 Years", value: 4 },
];

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const requiredRule: Rule = {
  required: true,
  message: "Field is Required",
};

interface P {
  onSubmit: (values: any) => void;
}

const Index = (props: P) => {
  return (
    <Form {...formLayout} labelAlign="left" onFinish={props.onSubmit}>
      <Form.Item label="Name" name="name" rules={[requiredRule]}>
        <Input />
      </Form.Item>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            {...layout2}
            label="BirthPlace"
            name="birthplace"
            rules={[requiredRule]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...layout2}
            label="BirthDay"
            name="birthday"
            rules={[requiredRule]}
          >
            <DatePicker className="full-width" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            {...layout2}
            label="Phone Number"
            name="phone"
            rules={[requiredRule]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...layout2}
            label="Gender"
            name="gender"
            rules={[requiredRule]}
          >
            <Select>
              {genderOpt.map((data, i) => (
                <Select.Option key={i} value={data.value}>
                  {data.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item {...layout2} label="GPA" name="gpa">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...layout2}
            label="Experience"
            name="experience"
            rules={[requiredRule]}
          >
            <Select>
              {experienceOpt.map((data, i) => (
                <Select.Option key={i} value={data.value}>
                  {data.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Address" name="address" rules={[requiredRule]}>
        <Input.TextArea rows={2} />
      </Form.Item>

      <Form.Item label="Social Media">
        <Row gutter={20}>
          <Col span={8}>
            <Form.Item name="facebook">
              <Input prefix={<FacebookOutlined />} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="instagram">
              <Input prefix={<InstagramOutlined />} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="twitter">
              <Input prefix={<TwitterOutlined />} />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item
            {...layout2}
            label="Salary Expectation"
            rules={[requiredRule]}
          >
            <InputNumber className="full-width" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item {...layout2} label="Upload CV">
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button block>
                <UploadOutlined /> Click to upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item {...layout2} label="Upload Foto">
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button block>
                <UploadOutlined /> Click to upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Source Information"
        name="source"
        rules={[requiredRule]}
      >
        <Radio.Group>
          <Radio style={radioStyle} value={1}>
            Social Media
          </Radio>
          <Radio style={radioStyle} value={2}>
            Portal Job
          </Radio>
          <Radio style={radioStyle} value={3}>
            Official Career Site
          </Radio>
          <Radio style={radioStyle} value={4}>
            Teman
          </Radio>
        </Radio.Group>
      </Form.Item>

      <div className="flex-hor hor-end">
        <Button type="primary" htmlType="submit">
          SUBMIT
        </Button>
      </div>
    </Form>
  );
};

export default Index;
