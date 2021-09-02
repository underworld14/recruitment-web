import React from "react";
import { Menu, Avatar, Dropdown, message } from "antd";
import { MoreOutlined, UserOutlined } from "@ant-design/icons";
import { resetAuth } from "app/utils/auth";
import { useHistory } from "react-router-dom";
import _ from "lodash";

const menu = (props: { onProfile; onLockScreen; onLogout }) => {
  const { onLockScreen, onLogout, onProfile } = props;
  return (
    <Menu>
      <Menu.Item>
        <a onClick={onProfile}>Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={onLockScreen}>Lock Screen</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={onLogout}>Logout</a>
      </Menu.Item>
    </Menu>
  );
};

const Index = () => {
  const history = useHistory();
  const onLogout = async () => {
    resetAuth();
    history.push("/ga-login");
    window.location.reload(false);
    // const { dispatch } = this.props;
    // await remove(KEY_TOKEN);
    // await remove(KEY_LOCK);
    // await dispatch({
    //   type: PURGE,
    //   key: "rootGasik123",
    //   result: () => {
    //     Router.pushRoute("login");
    //   },
    // });
  };
  const onLockScreen = async () => {
    // const { auth } = this.props;
    // await remove(KEY_TOKEN);
    // await set(KEY_LOCK, _.get(auth, "data.username"));
    // window.location.reload();
    message.info("Lock Screen !");
  };
  const onProfile = async () => {
    message.info("Is Admin Account !");
  };
  return (
    <Dropdown
      overlay={() => menu({ onLockScreen, onLogout, onProfile })}
      placement="bottomLeft"
      trigger={["click"]}
    >
      <a className="flex-hor ver-center">
        <Avatar size={25} icon={<UserOutlined />} className="mr5" />
        <MoreOutlined className="text-white" />
      </a>
    </Dropdown>
  );
};
export default Index;
