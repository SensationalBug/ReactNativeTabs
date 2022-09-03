import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "To short")
    .max(12, "To long")
    .required("Password is required"),
});
