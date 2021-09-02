import React from "react";
import { Collapse, Row, Divider } from "antd";
import styles from "../style.module.less";

import PanelHeader from "./panel/header";
import PanelStatistic from "./panel/statistic";

const { Panel } = Collapse;

const panelProps = {
  showArrow: false,
  className: styles.customPanel,
};

const Index = () => {
  return (
    <Collapse bordered={false} ghost onChange={console.log}>
      <Panel header={<PanelHeader />} key="1" {...panelProps}>
        <Row align="middle">
          <PanelStatistic title="APPLIED" value="54" />
          <PanelStatistic title="SCREENING" value="30" />
          <PanelStatistic title="PREASSESMENT" value="20" />
          <PanelStatistic title="ASSESTMENT" value="18" />
          <PanelStatistic title="INTERVIEW" value="10" />
          <PanelStatistic title="HIRED" value="3" />
        </Row>
      </Panel>

      <Panel header={<PanelHeader />} key="2" {...panelProps}>
        <Row align="middle">
          <PanelStatistic title="APPLIED" value="54" />
          <PanelStatistic title="SCREENING" value="30" />
          <PanelStatistic title="PREASSESMENT" value="20" />
          <PanelStatistic title="ASSESTMENT" value="18" />
          <PanelStatistic title="INTERVIEW" value="10" />
          <PanelStatistic title="HIRED" value="3" />
        </Row>
      </Panel>

      <Panel header={<PanelHeader />} key="3" {...panelProps}>
        <Row align="middle">
          <PanelStatistic title="APPLIED" value="54" />
          <PanelStatistic title="SCREENING" value="30" />
          <PanelStatistic title="PREASSESMENT" value="20" />
          <PanelStatistic title="ASSESTMENT" value="18" />
          <PanelStatistic title="INTERVIEW" value="10" />
          <PanelStatistic title="HIRED" value="3" />
        </Row>
      </Panel>
    </Collapse>
  );
};

export default Index;
