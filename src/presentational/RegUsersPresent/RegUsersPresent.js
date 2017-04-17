import React from 'react';

// srtyles
import './RegUsers.sass';

export default function Registrations(props) {

  const { RegVisitor } = props.RegVisitorActions
  const { platform } = props.PlatformReducer;

  return (

    <div className="registrations">
      <h2>Регистрация гостя</h2>
      <p>Удалённая регистрация используется в тех случаях, когда клиент не имеет возможности зарегистрироваться в сети напрямую через "он-лайн" сервис. Например, не получается позвонить на указанный номер. Регистрация устройства действительна в течение 3-х месяцев, по всей сети компании WiFiGroup</p>
      <div className="form-registration-user">
        <div>
          <span>Выберите площадку<strong>*</strong></span>
          <span>Для удаленной регистрации пользователя, введите номер, который в данный момент показан на клиентском устройстве:<strong>*</strong></span>
          <span>Введите номер телефона клиента в международном формате<strong>*</strong></span>
          <span>Описание</span>
        </div>
        <div>

          <form onSubmit={RegVisitor} className="mui-form">
            <div>
              <select className="mui-btn mui-btn--small mui-btn--primary mui-btn--raised">

                {
                  platform.map((item, index) => {
                    return <option key={index} value={item.name}>{item.name}</option>
                  })
                }

              </select>
            </div>

            <div className="mui-textfield mui-textfield--float-label">
              <input type="tel" required/>
              <label>Телефон</label>
            </div>
            <div className="mui-textfield mui-textfield--float-label">
              <input type=" text" required/>
              <label>Телефон</label>
            </div>
            <div className="mui-textfield mui-textfield--float-label">
              <textarea rows="4"/>
              <label>Описание</label>
            </div>

            <button className="mui-btn mui-btn--primary">Найти</button>
          </form>

        </div>
        <div><img src={require("./img/info__reg-phone.png")}></img></div>
      </div>
    </div>
  )

}
