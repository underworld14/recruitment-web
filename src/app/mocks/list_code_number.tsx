import Countries from "./list_country";
import { Typography } from "antd";
import _ from "lodash";

export interface ICodeType {
  label: string;
  value: string;
  flag: string;
}
const list_code_number = () => {
  let tmp: any = Countries.map((item) => {
    const image = item.flag;
    const value: any = `+${item.callingCodes[0]}`;
    const label = `${item.name} (${value})`;
    return {
      label,
      value,
      image,
    };
  });
  tmp = _(tmp)
    .filter((item) => item.value !== "")
    .value();
  tmp = _.uniqBy(tmp, "value");

  return tmp as ICodeType[];
};
export default list_code_number;
