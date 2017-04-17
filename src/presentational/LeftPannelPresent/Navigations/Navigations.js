import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// styles
import './navigations.sass';

export default class Navigations extends React.Component {

  state = {
    isOpen: true,
    isOpenTwo: true
  }

  handlerOne = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handlerTwo = () => {
    this.setState({ isOpenTwo: !this.state.isOpenTwo });
  }

  render() {
    let height, heightTwo, transform;

    if(this.state.isOpenTwo) {
      heightTwo = '70px'
    } else {
      heightTwo = '150px'
    }

    return (
      <nav className="navigations-pannel">

        <ul>
          <li>
            <Link to="/platform">
            <i
              className='fa fa-inbox'
              aria-hidden="true"
            />
            Площадки
            </Link>
          </li>

          <li>
            <Link to="/routers">
            <i
              className="fa fa-user-plus"
              aria-hidden="true"
            />
            Хотспоты
            </Link>
          </li>

          <li>
            <Link to="/registrations">
            <i
              className="fa fa-user-plus"
              aria-hidden="true"
            />
            Регистрация гостя
            </Link>
          </li>

          <li>
            <Link to="/pagewelcome">
            <i
              className="fa fa-eye"
              aria-hidden="true"
            />
            Страницы приветствия
            </Link>
          </li>

          <li style={{height: `${heightTwo}`}}>
            <Link onClick={this.handlerTwo}>
            <i
              className={classNames('fa fa-line-chart', this.state.isOpenTwo ? 'triangleOne' : 'triangleTwo')}
              aria-hidden="true"
            />
            Статистика
            </Link>

            <ul>
              <li><Link to="statistics">Аналитика Площадки</Link></li>
              <li><Link>История регистраций</Link></li>
            </ul>
          </li>
        </ul>

      </nav>

    )
  }
}
