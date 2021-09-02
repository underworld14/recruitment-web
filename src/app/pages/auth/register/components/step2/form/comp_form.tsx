import * as layout from "./form_layout";
import { Button, Col, Form, Row, Typography, Checkbox, message } from "antd";
import { Field, FormikProps } from "formik";
import { withTranslation } from "react-i18next";
import { BsLock, BsBriefcase, BsPerson } from "react-icons/bs";
import AntFields from "app/components/ant_design/ant_custom";
import { IValues } from "./form_proto";
import React from "react";
import _ from "lodash";

interface ITranslate extends FormikProps<IValues> {
  t?: any;
}

const Index = (props: ITranslate) => {
  const { handleSubmit, isSubmitting, values, setFieldValue, errors } = props;
  const [agree, setAgree] = React.useState(false);
  const { formLayout } = layout;
  const onChangeAgree = (e) => {
    const tmp = e.target.checked;
    setAgree(tmp);
    setFieldValue("agree", tmp);
  };
  const redirectTerms = () => {
    message.info("Redirect To Terms");
  };
  const redirectPrivacy = () => {
    message.info("Redirect To Privacy");
  };
  const isAgreed = () => !_.get(errors, "agree");
  return (
    <Form {...formLayout}>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Field name="name">
            {(fieldProps) => (
              <AntFields
                {...fieldProps}
                formItem={{ label: "Nama" }}
                prefix={<BsPerson />}
                type="AntInput"
                placeholder="Insert Personal Name"
                size="large"
              />
            )}
          </Field>
        </Col>
        <Col span={24}>
          <Field name="password">
            {(fieldProps) => (
              <AntFields
                {...fieldProps}
                formItem={{ label: "Password" }}
                prefix={<BsLock />}
                type="AntInputPassword"
                placeholder=" Insert Password"
                size="large"
              />
            )}
          </Field>
        </Col>
        <Col span={24}>
          <Field name="company_name">
            {(fieldProps) => (
              <AntFields
                {...fieldProps}
                formItem={{ label: "Nama Perusahaan" }}
                prefix={<BsBriefcase />}
                type="AntInput"
                placeholder="Insert Company Name"
                size="large"
              />
            )}
          </Field>
        </Col>

        <Col span={24} className="mb25">
          <Checkbox checked={values.agree} onChange={onChangeAgree}>
            <span className="text-xs">
              Setujui Dengan
              <a className="mr3 ml3" onClick={redirectTerms}>
                Syarat Pengunaan
              </a>
              dan
              <a className="ml5" onClick={redirectPrivacy}>
                Kebijakan Privasi
              </a>
            </span>
          </Checkbox>
          {!isAgreed() && <span className="error">Must Be Accepted !</span>}
        </Col>

        <Col span={24} className="mb25">
          <Row justify="end" align="middle" className="mb5">
            <Button
              onClick={handleSubmit as any}
              disabled={isSubmitting}
              loading={isSubmitting}
              block
              type="primary"
              htmlType="submit"
              size="large"
            >
              LANJUT
            </Button>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
export default withTranslation()(Index as any);
