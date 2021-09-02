import React from "react";
import { Layout, Menu, Input, Row, Tooltip, Badge, Divider } from "antd";
import {
  BellOutlined,
  MessageOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import styles from "./style.module.less";
import DropDownMenu from "./dropdown_menu";
const { Header } = Layout;

const Index = () => {
  return (
    <Header className={styles.adminHeader}>
      <Row align="middle">
        <img
          src="/images/icons/logo_square_white.png"
          className={styles.logoGawee}
        />
        <Menu theme="dark" mode="horizontal" className={styles.headerMenu}>
          <Menu.Item key="1" className={styles.menuItem}>
            DASHBOARD
          </Menu.Item>
          <Menu.Item key="2" className={styles.menuItem}>
            LOKER
          </Menu.Item>
          <Menu.Item key="3" className={styles.menuItem}>
            KANDIDAT
          </Menu.Item>
          <Menu.Item key="4" className={styles.menuItem}>
            AGENDA
          </Menu.Item>
          <Menu.Item key="5" className={styles.menuItem}>
            LAPORAN
          </Menu.Item>
        </Menu>
      </Row>
      <Row align="middle">
        <span>
          <SearchOutlined className="text-white" />
          <Input placeholder="Cari Kandidat" className={styles.searchInput} />
        </span>
        <a className="mr20">
          <Tooltip title="Message" placement="bottom">
            <MessageOutlined className="text-lg text-white" />
          </Tooltip>
        </a>
        <a className="mr20">
          <Tooltip title="Notification" placement="bottom">
            <Badge dot>
              <BellOutlined className="text-lg text-white" />
            </Badge>
          </Tooltip>
        </a>
        <Divider type="vertical" className={`${styles.divider} mr25`} />
        <DropDownMenu />
      </Row>
    </Header>
  );
};

export default Index;
