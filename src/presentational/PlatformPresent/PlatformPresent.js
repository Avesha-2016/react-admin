import React from 'react';

// inside component
import ModalWindow from './ModalWindow/ModalWindow';
import UnitPlatform from './UnitPlatform/UnitPlatform';

// styles
import './PlatformPresent.sass';

export default class PlatformPresent extends React.Component {

  state = {
    isOpen: false
  }

  render() {
    const { platform, isOpen, deleteModal, preloader } = this.props.platform;
    const { OpenPlatform } = this.props.PlatformActions;

    return (

      <div className="registrations">
        <h2>Площадки</h2>
        <div className="add-platform">
          <button onClick={OpenPlatform} className="mui-btn mui-btn--primary">Добавить площадку</button>
        </div>

        <ModalWindow
          isOpen={isOpen}
          modalClose={this.modalClose}
          PlatformActions={this.props.PlatformActions}
          platform={this.props.platform}
        />

        {
          platform.map((item, index) => {
            return  <UnitPlatform
                      key={index}
                      item={item}
                      PlatformActions={this.props.PlatformActions}
                      platform={this.props.platform}
                    />
          })
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
