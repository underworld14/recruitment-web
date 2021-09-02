import * as layout from "./form_layout";

import { Button, Col, Form, Row, Typography } from "antd";
import { Field, FormikProps } from "formik";
import { withTranslation } from "react-i18next";

import { FiLock, FiMail } from "react-icons/fi";
import AntFields from "app/components/ant_design/ant_custom";
import { IValues } from "./form_proto";
import React from "react";
import _ from "lodash";

interface ITranslate extends FormikProps<IValues> {
  t?: any;
}

const Index = (props: ITranslate) => {
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
                formItem={{ label: "Masukan Email Terdaftar", noReq: true }}
                prefix={<FiMail />}
                type="AntInput"
                placeholder="Insert Email"
                size="large"
              />
            )}
          </Field>
        </Col>
        <Col span={24}>
          <Row justify="end" align="middle" className="mt10 mb5">
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
