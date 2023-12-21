import { FormControl, Input, InputLabel } from "@mui/material";
import "../styles/SignUp.css";
import { useFormik } from 'formik';


export default function SignUp() {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    }
  })
    return (
        <>
          <div className="signup__header">
              <h4>Регистрация</h4>
          </div>
        <form className="login__container-form">
          <FormControl variant="standard" className="form-container">
            <InputLabel htmlFor="standard-adornment">
              Имя пользователя
            </InputLabel>
            <Input />
          </FormControl>
          <FormControl variant="standard"  className="form-container">
            <InputLabel htmlFor="standard-adornment">
              Почта
            </InputLabel>
            <Input/>
          </FormControl>
          <button className="login__input-button">
            Далее 
          </button>
        </form>

       
        </>
        
    )
}