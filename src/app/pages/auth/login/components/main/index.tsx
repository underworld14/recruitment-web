import React from "react";
import { Col, Row, Button, message } from "antd";
import CompForm from "./form";
import { IValues } from "./form/form_proto";
import { FiArrowRight } from "react-icons/fi";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { getAuth, setAuth } from "app/utils/auth";

const ButtonRegister = () => {
  const history = useHistory();
  return (
    <Row align="middle" justify="center" className="mb25 mt10">
      <Button type="text" block onClick={() => history.push("/ga-register")}>
        <Row align="middle" justify="center">
          <span>Tidak Mempunyai Akun ? Silakan Daftar</span>
          <span className="ml5 mr5 text-bold">GRATIS</span>
          <FiArrowRight />
        </Row>
      </Button>
    </Row>
  );
};

const Index = () => {
  const history = useHistory();
  const handlelogin = async (values: IValues) => {
    setAuth(values.email);
    console.log("role", getAuth());
    // const { dispatch } = this.props;
    // const res = await login(values, this.props.t);
    // let isSuccess = res.status === "success"
    // const isSuccess = getAuth() !== "";
    // if (isSuccess) {
    //   // // const { data } = res;
    //   // // await set(KEY_TOKEN, _.get(data, "access_token"));
    //   // // const resProfile = await my_profile();
    //   // // const dataProfile = resProfile.data;
    //   // await set(KEY_TOKEN, "TOKENNYA");
    //   // const dataProfile = {
    //   //   username: "DummyUser",
    //   // };
    //   // await dispatch(setMyProfile(dataProfile));
    //   // if (dataProfile) Router.pushRoute("dashboard");
    //   history.replace("/");
    //   window.location.reload(true);
    // } else {
    //   message.error("Wrong Email !");
    // }
  };
  return (
    <Col xs={24} lg={12} className="main">
      <Row justify="center" align="middle" className="full-height">
        <Col span={18}>
          <Row justify="center" align="middle">
            <img src="/images/logo.png" className="logo" />
          </Row>
          <h5 className="title"> Daftar </h5>
          <p className="content mb15"> Dengan email Perusahaan</p>
          <CompForm onSubmit={handlelogin} />
          <ButtonRegister />
        </Col>
      </Row>
    </Col>
  );
};

export default Index;
