import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  sector: Yup.string().required("Is Required !"),
  number: Yup.string().required("Is Required !"),
  type: Yup.string().required("Is Required !"),
});
export default validationSchema;
