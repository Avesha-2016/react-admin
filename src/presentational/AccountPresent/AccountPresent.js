import React from 'react';
import isEmpty from 'lodash/isEmpty';

// styles
import './AccountPresent.sass';

export default class AccountPresent extends React.Component {
  componentDidMount() {
      this.props.AccountActions.InitialDataAccount();
  }

  render() {

    const {
      InputPhone,
      InputEmail,
      ChangeData,
      InputOrganization,
      ChangeDataAccount,
      InitialDataAccount,
      closeWindow
    } = this.props.AccountActions;

    const {
      Phone,
      Email,
      isOpen,
      creationDate,
      Organization,
      error
    } = this.props.AccountReducer;

    return (
      <div className="registrations registrations_account">
        <h2>Информация об аккаунте</h2>
        <div className="account_pannel">
          <div>
            <i className="fa fa-address-book-o" aria-hidden="true"></i>
          </div>

          <div className="account_pannel__data">
            <ul>
              <li>E-mail: </li>
              <li>Организация: </li>
              <li>Телефон: </li>
            </ul>

            <ul>
              <li>{Email}</li>
              <li>{ !isEmpty(Organization)  ? `${Organization}` : 'Заполните это поле' }</li>
              <li>{ !isEmpty(Phone)         ? `${Phone}`        : 'Заполните это поле' }</li>
            </ul>

          </div>

        </div>

        <button
          className="mui-btn mui-btn--primary"
          onClick={ChangeData}>Редактировать
        </button>

        <div
          className="add-platform__modal add-platform__modal__account"
          style={{
            opacity: isOpen ? '1'  : '0',
            zIndex:  isOpen ? '10' : '-10'
          }}>
          <form  className="mui-form">
            <i
              onClick={closeWindow}
              className="fa fa-times-circle-o"
              aria-hidden="true"
            />

            <legend>Редактировать</legend>

            {
              error &&
              <b>{error.phoneNumber[0]}</b>
            }

            <div className="mui-textfield mui-textfield--float-label">
              <input
                onChange={InputOrganization}
                type="text"
                value={Organization}
                required
              />
              <label>Организация</label>
            </div>

            <div className="mui-textfield mui-textfield--float-label">
              <input
                onChange={InputPhone}
                type="tel"
                value={Phone}
                placeholder="Телефон"
                required
              />
            </div>

            <button onClick={ChangeDataAccount} className="mui-btn mui-btn--primary">Сохранить</button>
          </form>
        </div>
      </div>

    )
  }
}
