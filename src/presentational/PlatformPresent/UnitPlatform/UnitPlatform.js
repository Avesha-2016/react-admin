import React from 'react';
import { browserHistory } from "react-router";
import classNames from 'classnames';


export default class UnitPlatform extends React.Component {

  state = {
    deleteModal: false,
    changeModal: false
  }

  handlerIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  goRouters(e) {
    browserHistory.push(`routers`);
  }

  deleteModalOpen = () => {
    this.setState({ deleteModal: true })
  }

  deleteModalClose() {
    this.setState({ deleteModal: false })
  }

  changeModalOpen = () => {
    this.setState({ changeModal: true })
  }


  changeModalClose() {
    this.setState({ changeModal: false })
  }

  deleteModal(item) {
    let self = this;
    function  *GEN() {
      self.props.PlatformActions.deletePlatform(item)
      yield;
      self.setState({ deleteModal: false })
    }
    let gen = GEN();

    gen.next();
    gen.next();

  }

  changeModal(item) {
    let self = this;

    function  *GEN() {
      self.props.PlatformActions.changePlatform(item)
      yield;
      self.setState({ changeModal: false })
    }
    let gen = GEN();

    gen.next();
    gen.next();
  }

  render() {
    const {
      deleteModal,
      isOpen,
      changeModal,
      namePlatform,
      addressPlatform
    } = this.state;

    const item = this.props.item;

    const {
      deletePlatform,
      changePlatform,
      InputNamePlatform,
      addressChangePlatform,
      disablePlatform
    } = this.props.PlatformActions;

    return (
      <ul className="unit-platform" style={{ background: item.active === false ? '#2c4354' : '#44647d' }}>
        <li># {item.id }</li>
        <li>{item.name }</li>
        <li>{item.address}</li>
        <button onClick={this.goRouters.bind(this,item )} className="mui-btn mui-btn--accent mui-btn--small platform_btn">Хотспоты <b>[0]</b></button>

        {
          item.active
          ? <i
            onClick={disablePlatform.bind(this, item)}
            title="Выключить"
            className="fa fa-toggle-on"
            aria-hidden="true"
            />

          : <i
            onClick={disablePlatform.bind(this, item)}
            title="Выключить"
            className="fa fa-toggle-off"
            aria-hidden="true"
            />
        }


        <i
          onClick={this.deleteModalOpen}
          title="Удалить"
          className="fa fa-trash"
          aria-hidden="true"
        />

        <i
          onClick={this.changeModalOpen}
          title="Редактировать"
          className="fa fa-pencil-square"
          aria-hidden="true"
        />

        {
          this.state.deleteModal &&
          <div className="add-platform__modal animated tdPlopInUp unit-platform__delete-modal">
            <h3>Подтверждение удаления площадки</h3>
            <button
              onClick={this.deleteModalClose.bind(this, item)}
              className="mui-btn mui-btn--primary">Отмена
            </button>

            <button
              onClick={this.deleteModal.bind(this, item)}
              className="mui-btn mui-btn--danger">Удалить
            </button>
          </div>
        }

        {
          this.state.changeModal &&
          <div className={classNames("add-platform__modal animated unit-platform__change-modal",
            changeModal
            ? "tdPlopInUp"
            : "tdShrinkOutBounce" )}>

            <i onClick={this.changeModalClose.bind(this, item)} className="fa fa-times-circle-o" aria-hidden="true"></i>
            <h3>Редактировать</h3>
            <div className="mui-textfield mui-textfield--float-label">
              <input onChange={InputNamePlatform} type="text" value={namePlatform} />
              <label>Имя</label>
            </div>

            <div className="mui-textfield mui-textfield--float-label">
              <input onChange={addressChangePlatform} type="text" value={addressPlatform} />
              <label>Адресс</label>
            </div>

            <button
              onClick={this.changeModal.bind(this, item)}
              className="mui-btn mui-btn--primary">Изменить
            </button>

          </div>
        }

      </ul>
    )
  }

}
