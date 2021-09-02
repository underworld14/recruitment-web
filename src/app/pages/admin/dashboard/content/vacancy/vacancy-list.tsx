import React from "react";
import { Row, Col, Typography, Space, Divider } from "antd";
import { FaBriefcase, FaRegEye } from "react-icons/fa";

import styles from "../../../style.module.less";

const { Text } = Typography;

const VacancyList = () => {
  return (
    <>
      <Row justify="space-between" align="middle">
        <Col span={16}>
          <div className="flex-hor ver-center">
            <FaBriefcase className={styles.iconVacancy} />
            <div className="flex-ver">
              <Text className="text-xs">Senior Software Engineer</Text>
              <Space>
                <Text type="secondary" className="text-xxs text-icon">
                  <FaRegEye /> 1883
                </Text>
                <Text type="secondary" className="text-xxs text-icon">
                  <FaRegEye /> 1883
                </Text>
                <Text type="secondary" className="text-xxs text-icon">
                  <FaRegEye /> 1883
                </Text>
              </Space>
            </div>
          </div>
        </Col>
        <Col xs={4} xl={6}>
          <Text type="secondary" className="text-xs">
            12 Days Ago
          </Text>
        </Col>
      </Row>
      <Divider className="mb10" />
    </>
  );
};

export default React.memo(VacancyList);
