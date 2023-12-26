import "../styles/Login.css";
import {
  TextField,
  IconButton,
  InputAdornment,
  Alert,
  InputLabel,
  Input,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMess, setShowErrMess] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const isFormValid =
    formik.values.username.trim() !== "" &&
    formik.values.password.trim() !== "";

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(formik.values);
    axios
      .post("https://neobook.online/mobi-market/users/login/", formik.values)
      .then((response) => console.log(response))
      .catch((err) => {
        if (err.response) {
          console.error(
            "server reponded with error status:",
            err.response.status
          );
          if (err.response.status === 404) {
            setShowErrMess(true);
            setTimeout(() => {
              setShowErrMess(false)
            }, 3000);
          }
        }
      });
  };

  return (
    <div className="right-container">
      {showErrorMess && (
        <div className="login__error">
          <Alert variant="filled" severity="error" className="error-color">
            Неверный логин или пароль
          </Alert>
        </div>
      )}
      <div className="login__container-content">
        <form className="container-form" onSubmit={handleLogin}>
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
          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Пароль
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? (
                      <Visibility sx={{ color: "#5458EA" }} />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <a href="#" className="login__link">
              Забыли пароль
            </a>
          </FormControl>
          <button
            className={`login__submit-button ${
              isFormValid ? "button-valid" : "button-invalid"
            }`}
            disabled={!isFormValid}
          >
            Войти
          </button>
        </form>
        <div className="login__signUp">
          <a className="login__link" href="#">
            Зарегистрироваться
          </a>
        </div>
      </div>
    </div>
  );
}
// password: Yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
  // confirm_password: Yup
  //   .string()
  //   .required()
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match'),