import React from 'react';
import { browserHistory } from 'react-router';
import {findDOMNode} from 'react-dom';

// styles
import './LoginForm.sass';

export default class LoginFormPresent extends React.Component {
  state = {
    reg: false,
    auth: true
  }

  handlerReg = () => {
    this.setState({ reg: true, auth: false })
  }

  handlerAuth = () => {
    this.setState({ reg: false, auth: true })
  }

  componentDidUpdate() {
    if(this.props.LoginForm.token) {
      localStorage.setItem('token', this.props.LoginForm.token);
      this.props.LoginForm.token = null
    }

    localStorage.getItem('token')
    ? browserHistory.push('/')
    : null

  }

  render() {
    const { reg , auth, disabled } = this.state;

    const {
      InputName,
      InputPassword,
      InputPasswordConfirm,
      Authorizations,
      Registration
    } = this.props.LoginFormActions;

    const {
      name,
      password,
      passwordConfirm,
      token,
      data,
      error,
      errorsReg,
      preloader
    } = this.props.LoginForm;


    return (
      <div className="login-form">

        {
          preloader &&
          <div className="preloader">
            <img src={require('../../../public/preloader.gif')}></img>
          </div>
        }

        <div className="login-form__logo">
          <img src={require('../LeftPannelPresent/Logo/img/logo.png')}></img>
          <h2><b>Wi-fi </b>System</h2>
        </div>

        <div className="login-form__modal">
          {data && <h4>Успешная регистрация, ваш логин: <b>{ data.email}</b></h4>}
          <button
            className="mui-btn mui-btn--raised"
            style={{color: reg? '#272727' : '#2ebafb'}}
            onClick={this.handlerAuth}>Авторизация
          </button>
          <button
            className="mui-btn mui-btn--raised"
            onClick={this.handlerReg}>Регистрация
          </button>

          {
            auth &&
            <form onSubmit={Authorizations} className="mui-form">
              { error && <b>{error.nonFieldErrors}</b> }
              { error && <b>{error.email}</b> }
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  onChange={InputName}
                  type="text"
                  value={name}
                  required
                  autoComplete="off"
                />

                <label>Логин</label>
              </div>
              { error && <b>{error.password}</b> }
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  onChange={InputPassword}
                  type="password"
                  value={password}
                  required
                />

                <label>Пароль</label>
              </div>

              <button onClick={Authorizations} className="mui-btn mui-btn--primary">Войти</button>
            </form>
          }

          {
            reg &&
            <form onSubmit={Registration} className="mui-form">
              { errorsReg && <b>{errorsReg.email}</b> }
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  onChange={InputName}
                  type="text"
                  value={name}
                  required
                />

                <label>Логин</label>
              </div>
              { errorsReg && <b>{errorsReg.password}</b> }
              { errorsReg && <b>{errorsReg.confirm}</b> }
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  onChange={InputPassword}
                  type="password"
                  value={password}
                  required
                />

                <label>Пароль</label>
              </div>
              { errorsReg && <b>{errorsReg.password}</b> }
              <div className="mui-textfield mui-textfield--float-label">
                <input
                  onChange={InputPasswordConfirm}
                  type="password"
                  value={passwordConfirm} required
                />

                <label>Повторите пароль</label>
              </div>

              <button onClick={Registration} className="mui-btn mui-btn--primary">Регистрация</button>
            </form>
          }

        </div>
      </div>

    )
  }
}
