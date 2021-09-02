import React from "react";
import { Col, Row, Button } from "antd";
import CompForm from "./form";
import { IValues } from "./form/form_proto";
import { Typography } from "antd";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

interface IProps {
  onSubmit: (values: any) => Promise<any>;
}

const ButtonRegister = () => {
  const history = useHistory();
  return (
    <Row align="middle" justify="center" className="mb25 mt15">
      <Button type="text" block onClick={() => history.push("/ga-login")}>
        <Row align="middle" justify="center">
          <FiArrowLeft />
          <span className="ml5">Sudah Mempunyai Akun ? Silakan Login</span>
        </Row>
      </Button>
    </Row>
  );
};

const Index: React.FC<IProps> = (props: IProps) => {
  const { onSubmit } = props;
  return (
    <Col sm={24} xl={12} className="main">
      <Row justify="center" align="middle" className="full-height">
        <Col span={18}>
          <Row justify="center" align="middle">
            <img src="/images/logo.png" className="logo" />
          </Row>
          <h5 className="title"> Daftar </h5>
          <p className="content mb20"> Dengan email Perusahaan</p>
          <CompForm onSubmit={onSubmit} />
          <ButtonRegister />
        </Col>
      </Row>
    </Col>
  );
};
export default Index;
