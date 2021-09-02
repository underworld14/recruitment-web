import React from "react";
import { Layout } from "antd";
import HeaderComp from "./header";
import styles from "./style.module.less";

const { Content, Footer } = Layout;

interface P {
  children: React.ReactNode;
}

const Index: React.FC<P> = (props: P) => {
  return (
    <Layout>
      <HeaderComp />
      <Content className={styles.adminContent}>{props.children}</Content>
      <Footer className={styles.adminFooter}>
        @ 2020 Copyright - PT. Kayana Nusa Teknologi
      </Footer>
    </Layout>
  );
};

export default React.memo(Index);

// defaultSelectedKeys={["2"]}
