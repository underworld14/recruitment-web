import React from "react";
import { Layout, Menu, Button } from "antd";
import styles from "./style.module.less";

const { Header, Content, Footer } = Layout;

interface P {
  children: React.ReactNode;
}

const Index: React.FC<P> = (props: P) => {
  return (
    <Layout>
      <Header className={styles.header}>
        <img src="/images/logo.png" className={styles.logoGawee} />
        <Menu theme="dark" mode="horizontal" className={styles.menu}>
          <Menu.Item key="1" className={styles.menuItem}>
            PASANG LOWONGAN
          </Menu.Item>
          <Menu.Item key="2" className={styles.menuItem}>
            CARI LOWONGAN
          </Menu.Item>
          <Menu.Item key="3" className={styles.menuItem}>
            BANTUAN
          </Menu.Item>
          <Menu.Item key="4" className={styles.menuItem}>
            <Button className="btn-login"> Login </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.content}>{props.children}</Content>
      <Footer className={styles.footer}>
        @ 2020 Copyright - PT. Kayana Nusa Teknologi
      </Footer>
    </Layout>
  );
};

export default React.memo(Index);
