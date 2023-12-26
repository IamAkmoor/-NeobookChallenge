import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import "../styles/SignUp.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string("Enter your username")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  // password: Yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
  // confirm_password: Yup
  //   .string()
  //   .required()
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      // password: "",
      // confirm_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const isFormValid =
    formik.values.email.trim() !== "" && formik.values.username.trim() !== "";

  return (
    <div className="right-container">
      <div className="signup__header">
        <div className="back-button">
          <div className="icon">
            <KeyboardBackspaceRoundedIcon className="back-icon" />
          </div>
          <div className="text">Назад</div>
        </div>
        <div className="signup-text">Регистрация</div>
      </div>
      <div className="container-content">
        <form
          className="container-form "
          onSubmit={formik.handleSubmit}
        >
          <TextField
            className="form-container"
            id="username"
            label="Имя пользователя"
            variant="standard"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            className="form-container"
            id="email"
            label="Почта"
            variant="standard"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
          />
          <button
            className={`submit-button ${
              isFormValid ? "button-valid" : "button-invalid"
            }`}
          >
            Далее
          </button>
        </form>
      </div>
    </div>
  );
}
