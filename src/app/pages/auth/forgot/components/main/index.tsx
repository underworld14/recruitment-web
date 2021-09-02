import React from "react";
import { Col, Row, Button, message } from "antd";
import CompForm from "./form";
import { IValues } from "./form/form_proto";
import { Typography } from "antd";
import { FiArrowLeft } from "react-icons/fi";
import { connect } from "react-redux";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const ButtonRegister = () => {
  const history = useHistory();
  return (
    <Row align="middle" justify="center" className="mb25 mt15">
      <Button type="text" block onClick={() => history.push("/ga-login")}>
        <Row align="middle" justify="center">
          <FiArrowLeft />
          <span className="mr5">Kembali Ke Halaman Login</span>
        </Row>
      </Button>
    </Row>
  );
};

class Index extends React.Component<any, any> {
  handlelogin = async (values: any) => {
    const { dispatch } = this.props;
    // const res = await login(values, this.props.t);
    // let isSuccess = res.status === "success"
    const isSuccess = true;
    if (isSuccess) {
      // // const { data } = res;
      // // await set(KEY_TOKEN, _.get(data, "access_token"));
      // // const resProfile = await my_profile();
      // // const dataProfile = resProfile.data;
      // await set(KEY_TOKEN, "TOKENNYA");
      // const dataProfile = {
      //   username: "DummyUser",
      // };
      // await dispatch(setMyProfile(dataProfile));
      // if (dataProfile) Router.pushRoute("dashboard");
    }
  };
  render() {
    const { handlelogin } = this;
    return (
      <Col sm={24} xl={12} className="main">
        <Row justify="center" className="full-height">
          <Col span={18}>
            <Row justify="center" align="middle">
              <img src="/images/logo.png" className="logo mt45 mb15" />
            </Row>
            <p className="content">Lupa Password</p>
            <p className="title mb5">Gasik Cloud</p>
            <CompForm onSubmit={handlelogin} />
            <ButtonRegister />
          </Col>
        </Row>
      </Col>
    );
  }
}
export default connect()(Index);
