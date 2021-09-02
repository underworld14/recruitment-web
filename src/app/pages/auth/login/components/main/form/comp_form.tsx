import * as layout from "./form_layout";

import { Button, Col, Form, Row, Typography } from "antd";
import { Field, FormikProps } from "formik";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import AntFields from "app/components/ant_design/ant_custom";
import { IValues } from "./form_proto";
import React from "react";
import _ from "lodash";

interface ITranslate extends FormikProps<IValues> {
  t?: any;
}

const Index = (props: ITranslate) => {
  const history = useHistory();
  const { formLayout } = layout;
  const { handleSubmit, isSubmitting } = props;
  return (
    <Form {...formLayout}>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Field name="email">
            {(fieldProps) => (
              <AntFields
                {...fieldProps}
                formItem={{ noReq: true }}
                prefix={<FiMail />}
                type="AntInput"
                placeholder="Insert Email"
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
                formItem={{ noReq: true }}
                prefix={<FiLock />}
                type="AntInputPassword"
                placeholder=" Insert Password"
                size="large"
              />
            )}
          </Field>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={18}>
              <Field name="remember">
                {(fieldProps) => (
                  <AntFields
                    {...fieldProps}
                    formItem={{ noFeedback: true }}
                    type="AntCheckbox"
                    checkboxOptions={[
                      { label: "Ingatkan Saya", value: "remember" },
                    ]}
                  />
                )}
              </Field>
            </Col>
            <Col span={4}>
              <Row justify="center" align="middle">
                <Button type="text" onClick={() => history.push("/ga-forgot")}>
                  Lupa Kata Sandi ?
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="end" align="middle">
            <Button
              onClick={handleSubmit as any}
              disabled={isSubmitting}
              loading={isSubmitting}
              block
              type="primary"
              htmlType="submit"
              size="large"
            >
              MASUK
            </Button>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
export default withTranslation()(Index as any);
