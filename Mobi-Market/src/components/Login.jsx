import "../styles/Login.css";
import { TextField, FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import React from "react";
import axios from 'axios'
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginUser, setLoginUser] = React.useState({
    username: '',
    password: ''
  })
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    updateFormValidity(name === 'username' ? value : loginUser.username, name === 'password' ? value : loginUser.password);
  };

  const updateFormValidity = (newUsername, newPassword) => {
    setIsFormValid(newUsername.trim() !== '' && newPassword.trim() !== '');
  }

  const handleLogin = () => {
    console.log(loginUser)
    axios.post('https://neobook.online/mobi-market/users/login/', loginUser)
    .then(response => console.log(response))
    .catch(err => console.err(err))
  }

  return (
        <div className="login__container-form">
          <FormControl variant="standard" className="login__form-input">
            <TextField
              id="standard-basic"
              label="Имя пользователя"
              variant="standard"
              name="username"
              value={loginUser.username}
              onChange={handleInputChange}
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
              name="password"
              value={loginUser.password}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility 
                    sx={{ color:"#5458EA"}} /> :<VisibilityOff /> }
                  </IconButton>
                </InputAdornment>
              }
            />
            <a href="#" className="login__link" >Забыли пароль</a>
          </FormControl>
          <button 
            className={`login__input-button ${isFormValid ? 'login__button-valid' : 'login__button-invalid'}`}
            disabled={!isFormValid}
            onClick={handleLogin}
          >
            Войти
          </button>

          <div className="login__signUp">
            <a className="login__link" href="#">Зарегистрироваться</a>
          </div>
        </div>
  );
}
