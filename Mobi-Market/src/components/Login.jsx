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

  const handleClickShowPassword = () => {
    console.log("work");
    setShowPassword((show) => !show);
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginUser((prevUser) => ({
  //     ...prevUser,
  //     [name]: value,
  //   }));
  //   updateFormValidity(
  //     name === "username" ? value : loginUser.username,
  //     name === "password" ? value : loginUser.password
  //   );
  // };

  const isFormValid =
    formik.values.username.trim() !== "" &&
    formik.values.password.trim() !== "";

  const handleLogin = () => {
    console.log(loginUser);
    axios
      .post("https://neobook.online/mobi-market/users/login/", loginUser)
      .then((response) => console.log(response))
      .catch((err) => {
        if (err.response) {
          console.error(
            "server reponded with error status:",
            err.response.status
          );
          if (err.response.status === 404) {
            setShowErrMess(true);
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
      <div className="container-content">
        <form className="container-form" onSubmit={formik.handleSubmit}>
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
            className={`submit-button ${
              isFormValid ? "button-valid" : "button-invalid"
            }`}
            disabled={!isFormValid}
          >
            Войти
          </button>
        </form>
        {/* <div className="login__signUp">
          <a className="login__link" href="#">
            Зарегистрироваться
          </a>
        </div> */}
      </div>
    </div>
  );
}
