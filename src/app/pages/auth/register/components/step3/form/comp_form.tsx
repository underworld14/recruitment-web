import * as layout from "./form_layout";

import { Button, Col, Form, Row, Typography, Radio } from "antd";
import { Field, FormikProps } from "formik";
import { withTranslation } from "react-i18next";
import { BsPerson } from "react-icons/bs";
import AntFields from "app/components/ant_design/ant_custom";
import { IValues } from "./form_proto";
import React from "react";
import _ from "lodash";

const sectorOptions = [
  { label: "Technology Information", value: "select1" },
  { label: "Cosmetics", value: "select2" },
];
const typeOptions = [
  { label: "Tipe Kelola Ke Satu", value: "select1" },
  { label: "Tipe Kelola Ke Dua", value: "select2" },
];
const numberOptions = [
  { label: "1-100", value: "100" },
  { label: "101-500", value: "500" },
  { label: "501-1000", value: "1000" },
  { label: "1000+", value: "1000+" },
];

interface ITranslate extends FormikProps<IValues> {
  t?: any;
}

const Index = (props: ITranslate) => {
  const { handleSubmit, isSubmitting, values, setFieldValue } = props;
  const { formLayout } = layout;
  const setNumerEmp = (e) => {
    const tmp = e.target.value;
    setFieldValue("number", tmp);
  };
  return (
    <Form {...formLayout}>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Field name="sector">
            {(fieldProps) => (
              <AntFields
                {...fieldProps}
                formItem={{ label: "Bidang Perusahaan" }}
                prefix={<BsPerson />}
                type="AntSelect"
                placeholder="Insert Company Sector"
                selectOptions={sectorOptions}
                size="large"
              />
            )}
          </Field>
        </Col>
        <Col span={24} className="mb20">
          <div className="mb13">
            <span className="text-asterisk">*</span>
            <span>Ukuran Jumlah Pegawai</span>
          </div>
          <Row align="middle">
            <Radio.Group
              defaultValue={values.number}
              options={numberOptions}
              optionType="button"
              buttonStyle="solid"
              onChange={setNumerEmp}
            />
          </Row>
        </Col>
        <Col span={24}>
          <Field name="type">
            {(fieldProps) => (
              <AntFields
                {...fieldProps}
                formItem={{ label: "Tipe Kelola" }}
                prefix={<BsPerson />}
                type="AntSelect"
                placeholder="Insert Manage Type"
                selectOptions={typeOptions}
                size="large"
              />
            )}
          </Field>
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
