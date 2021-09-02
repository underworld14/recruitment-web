import _ from "lodash";

const filterOption = (input, option) => {
  const result = false;
  const tmpLabel = _.get(option, "props.label");
  const tmpValue = _.get(option, "props.value");
  const labelStr = typeof tmpLabel === "string";
  const valueStr = typeof tmpValue === "string";
  let selectLabel = false;
  let selectValue = false;
  if (tmpLabel && labelStr)
    selectLabel = tmpLabel.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  if (tmpValue && valueStr)
    selectValue = tmpValue.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  if (selectLabel || selectValue) return true;
  return false;
};
export default filterOption;
