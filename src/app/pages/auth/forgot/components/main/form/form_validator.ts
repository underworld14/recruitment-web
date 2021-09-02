import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must Be A Valid Email !")
    .required("Email Is Required !"),
});
export default validationSchema;
