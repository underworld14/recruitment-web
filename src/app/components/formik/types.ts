import {
  FieldInputProps,
  FieldMetaProps,
  FormikProps,
  FormikValues,
} from "formik";

import { CSSProperties } from "react";

export interface IFieldComponent {
  form: FormikProps<FormikValues>;
  field: FieldInputProps<FormikValues>;
  meta: FieldMetaProps<FormikValues>;
}
// export interface IListField {
//   component: React.ReactNode;
//   name: string;
//   label: string;
//   selectOptions?: Array<{ label: any; value: any }>;
//   style?: CSSProperties;
// }
// export interface IForm extends FormikProps<FormikValues> {}
