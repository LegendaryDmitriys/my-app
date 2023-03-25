import React from "react";
import './scss/autch.scss';



function Auth () {
    return (
        <div> 
         <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src="./assets/autch.png" alt=""/>
      </div>
      <div className="back">
        <img className="backImg" src="./assets/autch.png" alt=""/>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Вход</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"><div className="mail_svg"></div> </i>
                <input type="text" placeholder="Введите вашу почту" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Введите ваш пароль" required/>
              </div>
              <div className="text"><a href="#">Забыли пароль?</a></div>
              <div className="button input-box">
                <input type="submit" value="Войти"/>
              </div>
              <div className="sign-up-text">У вас нет учетной записи? <label htmlFor="flip">Зарегестрироваться</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">Регистрация</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Введите свой логин" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Введите свою почту" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Введите свой пароль" required/>
              </div>
              <div className="button input-box">
                <input type="submit" value="Зарегестрироваться"/>
              </div>
              <div className="text sign-up-text">У вас есть учетная запись? <label htmlFor="flip">Войти</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
</div>
        </div>
    )
}

export default Auth;