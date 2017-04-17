import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

// styles
import './styles/TopPannelPresent.sass';

export default class TopPannelPresent extends React.Component {

  componentDidMount() {
      this.props.AccountActions.InitialDataAccount();
  }

  exitHandler() {
    localStorage.removeItem('token');
    browserHistory.push('/');
  }

  render() {
    const { Email } = this.props.AccountReducer;

    return (

      <div className="top-pannel">
        <div>
          <Link to="/account">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          </Link>
          <h3>Тестовый аккаунт</h3>
          <span>{Email}</span>
        </div>

        <div>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <h3>Test связь-холдинг</h3>
          <span>Нижний Новгород</span>
        </div>
        <div className="top-pannel__users">
          <input className="mui-btn mui-btn--raised" type="button" value="Выйти" onClick={this.exitHandler.bind(this)} />
        </div>
      </div>

    )
  }

}
