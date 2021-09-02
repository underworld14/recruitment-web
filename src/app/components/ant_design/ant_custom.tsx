import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Radio,
  Checkbox,
} from "antd";
import FormItem from "./ant_form_item";
import Label from "./ant_custom_label";
import { IFieldComponent } from "app/components/formik/types";
import React from "react";
import TextLabel from "./private_label";
import _ from "lodash";
import { isMatch } from "app/utils/functions";

const { Option } = Select;
const { MonthPicker, TimePicker, YearPicker } = DatePicker;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const InputPassword = Input.Password;

type TComp =
  | "AntSelect"
  | "AntInput"
  | "AntInputPassword"
  | "AntInputNumber"
  | "AntTextArea"
  | "AntDatePicker"
  | "AntTimePicker"
  | "AntMonthPicker"
  | "AntYearPicker"
  | "AntRadio"
  | "AntCheckbox"
  | "AntSwitch";

export interface IAntCustom extends IFieldComponent {
  formItem?: {
    label?: string;
    colon?: boolean;
    noReq?: boolean;
    noFeedback?: boolean;
    loading?: boolean;
    className?: string;
    helper?: string;
    labelAlign?: "left" | "right";
    labelCol?: any;
  };
  placeholder?: string;
  prefix?: React.ReactNode;
  type: TComp;
  selectOptions?: Array<any>;
  radioOptions?: Array<any>;
  checkboxOptions?: Array<any>;
  onChange?: (id: string | number) => any;
  onBlur?: () => any;
  optionLabelProp?: string;
  dropdownMatchSelectWidth?: number;
  mode?: "multiple" | "tags";
  rows?: number;
  size?: "small" | "middle" | "large" | "default";
  disabled?: boolean;
  formatter?: (value: string | number) => any;
  parser?: (value: string | number) => any;
  min?: number;
  max?: number;
  addonBefore?: any;
  addonAfter?: any;
}

const checkType = (type: TComp): { Comps: any; isText: any } => {
  let Comps;
  let isText;
  switch (type) {
    case "AntSelect":
      Comps = Select;
      break;
    case "AntInput":
      Comps = Input;
      isText = true;
      break;
    case "AntInputPassword":
      Comps = InputPassword;
      isText = true;
      break;
    case "AntInputNumber":
      Comps = InputNumber;
      break;
    case "AntTextArea":
      Comps = TextArea;
      isText = true;
      break;
    case "AntDatePicker":
      Comps = DatePicker;
      break;
    case "AntTimePicker":
      Comps = TimePicker;
      break;
    case "AntMonthPicker":
      Comps = MonthPicker;
      break;
    case "AntYearPicker":
      Comps = YearPicker;
      break;
    case "AntSwitch":
      Comps = Switch;
      break;
    case "AntRadio":
      Comps = RadioGroup;
      isText = true;
      break;
    case "AntCheckbox":
      Comps = CheckboxGroup;
      break;
    default:
      Comps = Input;
      break;
  }
  return { Comps, isText };
};

let ant_custom = (props: IAntCustom) => {
  const {
    form,
    field,
    meta,
    formItem,
    placeholder,
    type,
    selectOptions,
    radioOptions,
    checkboxOptions,
    prefix,
    optionLabelProp,
    dropdownMatchSelectWidth,
    mode,
    rows,
    size,
    formatter,
    parser,
    min,
    max,
    addonAfter,
    addonBefore,
  } = props;

  const isSwitch = props.type === "AntSwitch";
  const isRadio = props.type === "AntRadio";
  const { setFieldValue, setFieldTouched, isSubmitting, submitCount } = form;
  const { name } = field;
  const { value, touched, error, initialValue } = meta;
  const onChangeText = (e: any) => setFieldValue(name, e.target.value);
  const onBlur = () => {
    setFieldTouched(name, true);
    if (props.onBlur) props.onBlur();
  };
  let onChange = (e: any) => setFieldValue(name, e);
  const { Comps, isText } = checkType(type);
  if (isText) onChange = onChangeText;
  if (props.onChange) onChange = props.onChange;
  let tmpSelectProps;
  if (selectOptions) {
    tmpSelectProps = {
      showSearch: true,
      optionLabelProp,
      dropdownMatchSelectWidth,
      mode,
      optionFilterProp: "label",
    };
  }

  // For Form Item
  let hasFeedback = true;
  let label: any = null;
  let isReq: any = true;
  let colon: any = false;
  const disabled: any = _.get(props, "disabled") || isSubmitting;
  let help: any = _.get(formItem, "helper") || " ";
  const labelAlign: "left" | "right" = _.get(formItem, "labelAlign") || "right";
  const className = _.get(formItem, "className") || "";
  const labelCol = _.get(formItem, "labelCol") || "";
  const hasSubmitted = submitCount >= 1;
  const hasHighlight = touched || hasSubmitted;
  const hasError = hasHighlight && error;
  let validateStatus: any = !hasHighlight ? "" : hasError ? "error" : "success";
  if (hasError) help = error;
  if (_.get(formItem, "label")) {
    if (_.get(formItem, "colon")) colon = true;
    if (_.get(formItem, "noReq")) isReq = false;
    label = TextLabel({ label: formItem.label, isRequired: isReq });
  }
  if (_.get(formItem, "noFeedback")) hasFeedback = false;
  if (addonAfter) hasFeedback = false;
  if (_.get(formItem, "loading")) validateStatus = "validating";
  const formProps = {
    className,
    label,
    colon,
    hasFeedback,
    initialValue,
    validateStatus,
    help,
    labelAlign,
    labelCol,
  };
  let compProps: any = {
    onChange,
    onBlur,
    name,
    placeholder,
    disabled,
    type,
    prefix,
    style: { width: "100%" },
    rows,
    formatter,
    parser,
    size,
    min,
    max,
    addonBefore,
    addonAfter,
  };
  if (radioOptions) {
    compProps = {
      ...compProps,
      options: radioOptions,
    };
  }
  if (checkboxOptions) {
    compProps = {
      ...compProps,
      options: checkboxOptions,
    };
  }
  if (isSwitch) {
    compProps = {
      ...compProps,
      checked: value,
    };
  } else {
    compProps = {
      ...compProps,
      value,
    };
  }
  const TmpComp = (
    <Comps {...compProps} {...tmpSelectProps}>
      {selectOptions &&
        selectOptions.map((item) => {
          return (
            <Option key={item.value} value={item.value} label={item.label}>
              {item.label}
              {_.get(item, "image") && (
                <img
                  src={item.image}
                  alt={item.label}
                  className="ml10"
                  style={{ width: "25px", height: "15px" }}
                />
              )}
            </Option>
          );
        })}
    </Comps>
  );
  return <Form.Item {...formProps}>{TmpComp}</Form.Item>;
};

ant_custom = React.memo(ant_custom, (prev, next) => {
  const convertForm = (form: any) => {
    const { isSubmitting, submitCount, touched, isValidating, isValid } = form;
    const myRes = {
      isSubmitting,
      submitCount,
      touched,
      isValidating,
      isValid,
    };
    return myRes;
  };
  const sameForm = isMatch(convertForm(prev.form), convertForm(next.form));
  const sameMeta = isMatch(prev.meta, next.meta);
  const sameField = isMatch(prev.field, next.field);
  const sameFormItem = isMatch(prev.formItem, next.formItem);
  const isSameSelect = _.isEqual(
    _.sortBy(prev.selectOptions),
    _.sortBy(next.selectOptions)
  );
  const hasil =
    sameMeta && isSameSelect && sameField && sameFormItem && sameForm;
  return hasil;
});

export default ant_custom;
export { FormItem, Label };
