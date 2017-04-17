import React from 'react';

export default function PlatformPresent(props) {

    const { modalClose, isOpen } = props;
    const { InputNamePlatform, createPlatform, closePlatform } = props.PlatformActions;
    const { namePlatform } = props.platform;

    return (

      <div
        className={isOpen
          ? 'animated tdPlopInUp add-platform__modal'
          : 'add-platform__modal'
        }
        style={{
          opacity: isOpen ? '1'  : '0',
          zIndex:  isOpen ? '10' : '-10'
        }}>
        <form onSubmit={createPlatform} className="mui-form">
          <i onClick={closePlatform} className="fa fa-times-circle-o" aria-hidden="true"></i>
          <legend>Новая площадка</legend>
          <div className="mui-textfield mui-textfield--float-label">
            <input onChange={InputNamePlatform} type="text" value={namePlatform} />
            <label>Имя</label>
          </div>

          <button onClick={createPlatform} className="mui-btn mui-btn--primary">Создать</button>
        </form>
      </div>

    )
}
