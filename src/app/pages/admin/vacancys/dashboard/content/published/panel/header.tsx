import React from "react";
import { Row, Col, Typography, Menu, Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaRegEye,
  FaShareAlt,
  FaTrashAlt,
  FaUserAlt,
} from "react-icons/fa";
const { Text } = Typography;

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          className="text-icon"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <FaRegEye /> Detail
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          className="text-icon"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <FaUserAlt /> Applicant
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          className="text-icon"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <FaShareAlt /> Sharing
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a
          className="text-icon"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <FaTrashAlt color="#f5222d" /> Close Job
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Row justify="space-between">
      <Col span={16}>
        <Row align="middle">
          <Col span={6}>
            <Text strong>Backend Developer</Text>
          </Col>
          <Col span={3}>
            <Text type="secondary" className="text-xs text-icon">
              <FaBriefcase /> IT
            </Text>
          </Col>
          <Col span={6}>
            <Text type="secondary" className="text-xs text-icon">
              <FaMapMarkerAlt /> South Jakarta, Indonesia
            </Text>
          </Col>
          <Col span={6}>
            <Text type="secondary" className="text-xs text-icon">
              <FaRegCalendarAlt /> 14 Maret 2020
            </Text>
          </Col>
        </Row>
      </Col>
      <Col span={1}>
        <Dropdown overlay={menu} trigger={["click"]}>
          <SettingOutlined onClick={(e) => e.stopPropagation()} />
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Header;
