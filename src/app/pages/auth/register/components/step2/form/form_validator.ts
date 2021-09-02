import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Is Required !"),
  company_name: Yup.string().required("Is Required !"),
  password: Yup.string().min(6, "Min 6 Characters !").required("Is Required !"),
  agree: Yup.boolean()
    .required("Must Be Accepted.")
    .oneOf([true], "Must Be Accepted."),
});
export default validationSchema;
