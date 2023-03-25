import React, { useContext, useState } from "react";
import "../scss/autch.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";



function Registration() {
  const {registerUser, wait} = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:''
  });

  const onChangeInput = (e) => {
      setFormData({
          ...formData,
          [e.target.name]:e.target.value
      })
  }

  const submitForm = async (e) => {
      e.preventDefault();

      if(!Object.values(formData).every(val => val.trim() !== '')){
          setSuccessMsg(false);
          setErrMsg('Please Fill in all Required Fields!');
          return;
      }

      const data = await registerUser(formData);
      if(data.success){
          e.target.reset();
          setSuccessMsg('You have successfully registered.');
          setErrMsg(false);
      }
      else if(!data.success && data.message){
          setSuccessMsg(false);
          setErrMsg(data.message);
      }
      
  }
    return (
    <div className="form">
      <div className="form-panel one active">
        <div className="form-header">
          <h1>Регистрация</h1>
          <h2>Заполните все поля для создания учетной записи.</h2>
        </div>
        <div className="form-content">
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="username">Логин</label>
              <input type="text" name="name" onChange={onChangeInput} id="name" value={formData.name} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input type="password" name="password" onChange={onChangeInput} id="password" value={formData.password} required />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Подтвердите пароль</label>
              <input type="password" id="cpassword" name="cpassword" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Адрес электронной почты</label>
              <input type="email" name="email" onChange={onChangeInput} id="email" value={formData.email} required />
            </div>
            <div className="form-group">
            {successMsg && <div className="success-msg">{successMsg}</div>}
            {errMsg && <div className="err-msg">{errMsg}</div>}
              <button type="submit"disabled={wait}>Зарегистрироваться</button>
            </div>
          </form>
          <p>У вас уже есть учетная запись? Пожалуйста,<Link to="/login">Войдите</Link></p>
        </div>
      </div>
    </div>
    );
  }
  
  export default Registration;
  
  
  
  
  
  