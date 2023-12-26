import { Alert, FormControl, Input, InputLabel, Snackbar, TextField } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import "../styles/SignUp.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const validationSchema = Yup.object({
  username: Yup.string("Enter your username")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required"),
  email: Yup.string("Enter your email").email("Invalid email format").required(""),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  const isFormValid =
    formik.values.email.trim() !== "" && formik.values.username.trim() !== "";

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(formik.values);
    axios
      .post("https://neobook.online/mobi-market/users/check-user/", formik.values)
      .then((response) => {
        if(response.data.username === false && response.data.email === false){
          console.log("proceed to the next page")
        }
        // ADND HERE TO CREATE THE NEXT PAGE AND LINK IT
        // ALSO I NEED TO DO THE ALERT MESSAGES
      })
      .catch((err) => {
        if (err.response) {
          console.error(
            "server reponded with error status:",
            err.response.status
          );
          if (err.response.status === 404) {
            setShowErrMess(true);
            console.log("do")
            setTimeout(() => {
              setShowErrMess(false);
            }, 3000);
          }
        }
      });
  };

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
        <form className="container-form " onSubmit={handleSignup}>
          <TextField
            className="form-container"
            id="username"
            label="Имя пользователя"
            variant="standard"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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
            error={formik.touched.email && Boolean(formik.errors.email)}
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
