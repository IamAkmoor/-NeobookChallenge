import "../styles/Login.css";
import { TextField, FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [signIn, setSignIn] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleFilledInput = () => 

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container-logo">
        </div>
        <div className="login__container-form">
          <FormControl variant="standard" className="login__form-input">
            <TextField
              id="standard-basic"
              label="Имя пользователя"
              variant="standard"
            />
          </FormControl>
          <FormControl variant="standard" className="login__form-input">
            <InputLabel
              htmlFor="standard-adornment-password"
            >
              Пароль
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility 
                    sx={{ color:"#5458EA"}} />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <a href="#" className="login__link" >Забыли пароль</a>
          </FormControl>
          <button className="login__input-button">
            Войти
          </button>

          <div className="login__signUp">
            <a className="login__link" href="#">Зарегистрироваться</a>
          </div>
        </div>
      </div>
    </div>
  );
}
