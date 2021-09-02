import _ from "lodash";
import moment from "app/utils/moment";
import { notification } from "antd";

interface IAbsenData {
  absenData: Array<{
    date: string;
    data: {
      data: any;
      last_data_type: any;
    };
  }>;
  config: {
    isKosong: boolean;
    month: any;
    year: any;
    total_days_work: any;
    total_hours_month: any;
    total_hours_year: any;
  };
}
interface IPhone {
  pre_phone: string;
  post_phone: string;
}

const phoneJoiner = (phone: IPhone): string => {
  const pre = _.get(phone, "pre_phone") || "";
  const post = _.get(phone, "post_phone") || "";
  const hasil = `${pre} ${post}`;
  return hasil;
};
const phoneSplitter = (phone: string): IPhone => {
  let tmpArr: Array<string> = [""];
  if (typeof phone === "string") {
    tmpArr = phone.split(" ");
  }
  let pre = _.get(tmpArr, "[0]") || "";
  let post = _.get(tmpArr, "[1]") || "";
  if (post === "") {
    post = pre;
    pre = "+62";
  }
  const hasil: IPhone = {
    pre_phone: pre,
    post_phone: post,
  };
  return hasil;
};

const formatterCurrency = (value) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const parserCurrency = (value) => value.replace(/\$\s?|(,*)/g, "");

const errNotif = (t: any) => {
  notification.error({
    placement: "topRight",
    message: t("error:conn_notif"),
    description: t("error:content_conn"),
  });
};

const isMatch = (a: any, b: any) => {
  const res = JSON.stringify(a) === JSON.stringify(b);
  return res;
};

const camelCaseSpaces = (text) => {
  return (
    text
      .toLowerCase()
      // Replaces any - or _ characters with a space
      .replace(/[-_]+/g, " ")
      // Removes any non alphanumeric characters
      .replace(/[^\w\s]/g, "")
      // Uppercases the first character in each group immediately following a space
      // (delimited by spaces)
      // .replace(/ (.)/g, function ($1) { return $1.toUpperCase(); })
      // // Removes spaces
      // .replace(/ /g, '');
      // To ComelCase Without Space
      .replace(/(?:(^.)|(\s+.))/g, function (match) {
        return match.charAt(match.length - 1).toUpperCase();
      })
      // Camelcase To Spaces (First String always UPPERCASE)
      .replace(/([A-Z]+)/g, " $1")
      .replace(/^ /, "")
  );
};

const convertAttendanceData = (dataAbsen: IAbsenData | any) => {
  // Custom Function
  //-- Normalize Absen Data
  let absenDate = [];
  const absenConfig = [];
  const absenDateFix = [];
  // Convert object iteration to array
  _.each(dataAbsen, (val, key: any) => {
    if (!isNaN(key)) {
      key = parseInt(key);
      absenDate.push({ day: key, value: val });
    } else {
      absenConfig.push({ key, val });
    }
  });
  // Check is valid date (Days)
  absenDate = _.sortBy(absenDate, (o) => o.day);
  const month = _.get(_.find(absenConfig, { key: "month" }), "val");
  const year = _.get(_.find(absenConfig, { key: "year" }), "val");
  const total_hours_month = _.get(
    _.find(absenConfig, { key: "total_working_hours" }),
    "val"
  );
  const total_hours_year = _.get(
    _.find(absenConfig, { key: "year_total_working_hours" }),
    "val"
  );
  let config: any = {
    month,
    year,
    total_hours_month,
    total_hours_year,
  };
  let total_days_work = 0;
  absenDate = absenDate.map((val) => {
    const tmpDate = `${year}-${month}-${val.day}`;
    const tmpMoment = moment(tmpDate, "YYYY-MM-DD");
    if (tmpMoment.isValid()) {
      absenDateFix.push({
        date: tmpMoment.format("YYYY-MM-DD"),
        data: val.value,
      });
      if (!_.isEmpty(val.value)) {
        total_days_work++;
      }
    }
  });
  const isKosong = _.isUndefined(_.get(config, "total_hours_month"));
  config = {
    ...config,
    total_days_work,
    isKosong,
  };
  const dataReturn = {
    absenData: absenDateFix,
    config,
  };
  return dataReturn;
};

const timeConvert = (menitNya) => {
  const num = menitNya;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return {
    hour: rhours,
    minute: rminutes,
  };
};

const generateIndex = (excluded: Array<number>): number => {
  let hasil = 0;
  let isDone = false;
  let i = 0;
  while (!isDone) {
    const isExist = excluded.includes(i);
    if (!isExist) {
      hasil = i;
      isDone = true;
    }
    i++;
  }
  return hasil;
};
// Normalize Filter
const getObjectFilter = (values) => {
  let newFilterObject = {};
  Object.keys(values).forEach((key) => {
    const value = values[key];
    if (!_.isEmpty(value) && value !== "all") {
      newFilterObject = {
        ...newFilterObject,
        [key]: value,
      };
    }
  });
  return newFilterObject;
};

function convertToRupiah(angka) {
  let rupiah = "";
  let angkarev = angka.toString().split("").reverse().join("");
  for (let i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
}
/**
 * Usage example:
 * alert(convertToRupiah(10000000)); -> "Rp. 10.000.000"
 */

function convertToAngka(rupiah) {
  return parseInt(rupiah.replace(/,.*|[^0-9]/g, ""), 10);
}

export {
  convertToRupiah,
  convertToAngka,
  camelCaseSpaces,
  convertAttendanceData,
  timeConvert,
  isMatch,
  errNotif,
  parserCurrency,
  formatterCurrency,
  phoneJoiner,
  phoneSplitter,
  generateIndex,
  getObjectFilter,
};
