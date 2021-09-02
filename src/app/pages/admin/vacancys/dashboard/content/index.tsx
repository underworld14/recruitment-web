import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Row, Col, Button, Input, Tabs } from "antd";
import Top from "./top";
import PublishedContent from "./published";

const { TabPane } = Tabs;

const Index = () => {
  const history = useHistory();
  return (
    <div className="page-content">
      <Top />
      <Card className="mt20" bodyStyle={{ padding: "2rem" }}>
        <Row justify="space-between">
          <Col>
            <Button
              danger
              type="primary"
              onClick={() => history.push("/admin/vacancy/create")}
            >
              CREATE JOB
            </Button>
          </Col>
          <Col>
            <Input.Search placeholder="search data" />
          </Col>
        </Row>
        <Tabs defaultActiveKey="1" className="mt20">
          <TabPane tab="PUBLISHED" key="1">
            <PublishedContent />
          </TabPane>
          <TabPane tab="DRAFT" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="CLOSED" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="ARCHIVED" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Index;
