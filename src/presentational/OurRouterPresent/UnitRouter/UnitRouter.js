import React from 'react';
import classNames from 'classnames';


export default class Template extends React.Component {

  state = {
    changeRouter: false,
    platform: 'Имя площадки',
    shablon: 'Выберите шаблон',
    manifactures: 'Выберите производителя',
    model: 'Выберите модель',
    platformSelect: false,
    shablonSelect: false,
    manifacturesSelect: false,
    modelSelect: false
  }

  openChangeRouter = () => {
    this.setState({ changeRouter: true })
  }

  closeChangeRouter = () => {
    this.setState({ changeRouter: false })
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
    const { changeRouter } = this.state;
    const item = this.props.item;

    const {
      routers,
      modalWindow,
      preloader,
      manifactures,
      shablon,
      model
    } = this.props.RouterReducer;

    const { platform } = this.props.platform;
    const changeRouterActions = this.props.changeRouterActions;

    return (
      <ul className="unit-platform unit-platform__hot-spot">
         <li>{item.identifier}</li>
         <li>{item.software}</li>

         {
           true
           ? <i
            //  onClick={disablePlatform.bind(this, item)}
             title="Выключить"
             className="fa fa-toggle-on"
             aria-hidden="true"
             />

           : <i
            //  onClick={disablePlatform.bind(this, item)}
             title="Выключить"
             className="fa fa-toggle-off"
             aria-hidden="true"
             />
         }

         <i
           onClick={this.openChangeRouter}
           title="Редактировать"
           className="fa fa-pencil-square"
           aria-hidden="true"
         />

         {
           changeRouter &&
           <div className={classNames("add-platform__modal add-platform__router animated unit-platform__change-modal",
             changeRouter
             ? "tdPlopInUp"
             : "tdShrinkOutBounce" )}>

             <i
               onClick={this.closeChangeRouter}
               className="fa fa-times-circle-o"
               aria-hidden="true">
             </i>

             <h3>Редактировать</h3>

             <div>
               <span>Площадка:</span>

               <ul
                 onClick={this.onSelectPlatformOpt}
                 style={{
                   height: this.state.platformSelect? 'auto' : 30,
                   background: this.state.platformSelect? '#d2e5fd' : 'none'
                 }}>
                 <li>{this.state.platform}</li>
                 {
                   platform.map((item, index) => {
                     return <li
                       onClick={this.platformSelectActions.bind(this, item)}
                       key={index}
                       value={item.name}>{item.name}
                     </li>
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
                   height: this.state.shablonSelect ? 'auto' : 30,
                   background: this.state.shablonSelect? '#d2e5fd' : 'none'
                 }}>

                 <li>{this.state.shablon}</li>
                 {
                   shablon.map((item, index) => {
                     return <li
                       onClick={this.shablonSelectActions.bind(this, item)}
                       key={index}
                       value={item.name}>{item.name}
                     </li>
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
                   height: this.state.manifacturesSelect ? 'auto' : 30,
                   background: this.state.manifacturesSelect ? '#d2e5fd' : 'none'
                 }}>
                 <li>{this.state.manifactures}</li>
                 {
                   manifactures.map((item, index) => {
                     return <li
                       onClick={this.manifacturesSelectActions.bind(this, item)}
                       key={index}
                       value={item.name}>{item.name}
                     </li>
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
                   height: this.state.modelSelect ? 'auto' : 30,
                   background: this.state.modelSelect ? '#d2e5fd' : 'none'
                 }}>
                 <li>{this.state.model}</li>
                 {
                   model.map((item, index) => {
                     return <li
                       onClick={this.modelSelectActions.bind(this, item)}
                       key={index}
                       value={item.name}>{item.name}
                     </li>
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
               onClick={changeRouterActions}
               className="mui-btn mui-btn--primary">Изменить
             </button>

           </div>
         }

      </ul>
    )
  }
}
