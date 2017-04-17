import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

// styles
import './OurRouterPresent.sass';

import UnitPresent from './UnitRouter/UnitRouter';

export default class OurRouterPresent extends React.Component {

  state = {
    createRouter: false,
    platform: 'Имя площадки',
    shablon: 'Выберите шаблон',
    manifactures: 'Выберите производителя',
    model: 'Выберите модель',
    platformSelect: false,
    shablonSelect: false,
    manifacturesSelect: false,
    modelSelect: false
  }

  openCreateRouter = () => {
    this.setState({ createRouter: true });
  }

  closeCreateRouter = () => {
    this.setState({ createRouter: false });
  }

  onSelectPlatformOpt = () => {
    this.setState({ platformSelect: !this.state.platformSelect })
  }
  onSelectShablonOpt = () => {
    this.setState({ shablonSelect: !this.state.shablonSelect })
  }
  onSelectManifacturesOpt = () => {
    this.setState({ manifacturesSelect: !this.state.manifacturesSelect })
  }
  onSelectModalOpt = () => {
    this.setState({ modelSelect: !this.state.modelSelect })
  }

  componentDidMount() {
    this.props.RouterActions.gettingRouters();
    this.props.RouterActions.gettingManufacturers();
    this.props.RouterActions.gettingShablon();
    this.props.RouterActions.gettingModel();
  }

  platformSelectActions(item) {
    this.setState({ platform: item.name }, () => {
      localStorage.setItem('SoftwarePlatform', this.state.platform);
    })
  }
  shablonSelectActions(item) {
    this.setState({ shablon: item.name }, () => {

    })
  }
  manifacturesSelectActions(item) {
    this.setState({ manifactures: item.name }, () => {

    })
  }
  modelSelectActions(item) {
    this.setState({ model: item.name }, () => {

    })
  }

  render() {
    const { createRouter } = this.state;

    const {
      routers,
      modalWindow,
      preloader,
      manifactures,
      shablon,
      model
    } = this.props.RouterReducer;

    const { openModalWindow, createRouterActions, changeRouterActions } = this.props.RouterActions;
    const { platform } = this.props.platform;

    return (
      <div className="registrations">
        <h2>Хотспоты</h2>

        <div className="add-platform">
          <button
            onClick={this.openCreateRouter}
            className="mui-btn mui-btn--primary">Добавить устройство
          </button>
        </div>

          {
            routers.map((item, index) => {
              return <UnitPresent
                modalWindow={modalWindow}
                RouterReducer={this.props.RouterReducer}
                platform={this.props.platform}
                item={item}
                key={index}
                changeRouterActions={changeRouterActions}
              />
            })
          }

        {
          createRouter &&
          <div className={classNames("add-platform__modal add-platform__router animated unit-platform__change-modal",
            createRouter
            ? "tdPlopInUp"
            : "tdShrinkOutBounce" )}>

            <i
              onClick={this.closeCreateRouter}
              className="fa fa-times-circle-o"
              aria-hidden="true">
            </i>

            <h3>Добавить устройство</h3>

            <div>
              <span>Площадка:</span>

              <ul onClick={this.onSelectPlatformOpt} style={{ height: this.state.platformSelect? 'auto' : 30, background: this.state.platformSelect ? '#d2e5fd' : 'none' }}>
                <li>{this.state.platform}</li>
                {
                  platform.map((item, index) => {
                    return <li onClick={this.platformSelectActions.bind(this, item)} key={index} value={item.name}>{item.name}</li>
                  })
                }
              </ul>
            </div>

            <div>
              <span>Шаблон страницы:</span>
              <ul
                onClick={this.onSelectShablonOpt}
                className="two-software"
                style={{
                  height: this.state.shablonSelect && this.state.platform !== 'Имя площадки' ? 'auto' : 30,
                  background: this.state.shablonSelect ? '#d2e5fd' : 'none',
                  opacity: this.state.platform !== 'Имя площадки' ? '1' : '0.5'
                }}>

                <li>{this.state.shablon}</li>
                {
                  shablon.map((item, index) => {
                    return <li
                      onClick={this.shablonSelectActions.bind(this, item)}
                      key={index}
                      value={item.name}>{item.name}</li>
                  })
                }
              </ul>
            </div>

            <div>
              <span>Производитель:</span>
              <ul
                className="three-software"
                onClick={this.onSelectManifacturesOpt}
                style={{
                  height: this.state.manifacturesSelect && this.state.shablon !== 'Выберите шаблон' ? 'auto' : 30,
                  background: this.state.manifacturesSelect ? '#d2e5fd' : 'none',
                  opacity: this.state.shablon !== 'Выберите шаблон' ? '1' : '0.5'
                }}>
                <li>{this.state.manifactures}</li>
                {
                  manifactures.map((item, index) => {
                    return <li onClick={this.manifacturesSelectActions.bind(this, item)} key={index} value={item.name}>{item.name}</li>
                  })
                }
              </ul>
            </div>

            <div>
              <span>Модель:</span>
              <ul
                className="fo-software"
                onClick={this.onSelectModalOpt}
                style={{
                  height: this.state.modelSelect && this.state.manifactures !== 'Выберите производителя' ? 'auto' : 30,
                  background: this.state.modelSelect ? '#d2e5fd' : 'none',
                  opacity: this.state.manifactures !== 'Выберите производителя' ? '1' : '0.5'
                }}>
                <li>{this.state.model}</li>
                {
                  model.map((item, index) => {
                    return <li onClick={this.modelSelectActions.bind(this, item)} key={index} value={item.name}>{item.name}</li>
                  })
                }

              </ul>
            </div>

            <hr />

            <div className="interface-routers">
              <div className="mui-textfield mui-textfield--float-label">
                <input onChange="" type="text" value="" />
                <label>Интерфейс Хотспота</label>
              </div>
              <div className="mui-textfield mui-textfield--float-label">
                <input onChange="" type="text" value="" />
                <label>Интерфейс Хотспота</label>
              </div>
              <div className="mui-textfield mui-textfield--float-label">
                <input onChange="" type="text" value="" />
                <label>Интерфейс Хотспота</label>
              </div>
              <div className="mui-textfield mui-textfield--float-label">
                <input onChange="" type="text" value="" />
                <label>Интерфейс Хотспота</label>
              </div>
            </div>


            <button
              onClick={createRouterActions.bind(null, this.state.platform, this.state.model, this.state.manifactures)}
              className="mui-btn mui-btn--primary">Создать
            </button>

          </div>
        }

        {
          preloader &&
          <div className="preloader">
            <img src={require('../../../public/preloader.gif')}></img>
          </div>
        }

      </div>
    )
  }

}

let obj = {
  i: 0,
  closure: function () {
    return this.i++;
  }
}

console.log(obj.closure());
console.log(obj.closure());
console.log(obj.closure());
