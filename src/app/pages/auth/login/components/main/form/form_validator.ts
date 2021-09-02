import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must Be A Valid Email !")
    .required("Email Is Required !"),
  password: Yup.string()
    .min(6, "Min 6 Characters !")
    .required("Password is Required !"),
});
export default validationSchema;
