import React from 'react';

import './PageWelcomePresent.sass';

let ArrImg = [
  'preview_blank.png',
  'preview_blank.png',
  'preview_blank.png',
  'preview_blank.png',
  'preview_blank.png',
  'preview_blank.png',
  'preview_blank.png',
  'preview_blank.png'
]

export default class PageWelcomePresent extends React.Component {

  state = {
    imgChoice: '',
    nameShablon: '',
    description: '',
    twoPage: false,
    language: 'Русский',
    lanToogle: false
  }

  lanToogleActions = () => {
    this.setState({ lanToogle: !this.state.lanToogle })
  }

  choiceImg(item) {
    this.setState({ imgChoice: item })
  }

  nameShablonActions(e) {
    this.setState({ nameShablon: e.target.value })
  }

  descriptionActions(e) {
    this.setState({ description: e.target.value })
  }

  nextStepActions(e) {
    e.preventDefault();
    this.setState({ twoPage: true })
  }

  lanClickActions(item) {
    this.setState({ language: item })
  }

  render() {

    const {
      nameShablon,
      description,
      twoPage,
      lanToogle,
      language
    } = this.state;

    let nextStep = Boolean();

    if(this.state.imgChoice && nameShablon.length > 0) {
      nextStep = true
    }

    const LanArr = ['Русский','Английский'];

    let OnePage = (
      <div className="page-welcome__container">

        <div>
          <h5>Основные настройки шаблона</h5>
          <form onSubmit={this.nextStepActions.bind(this)}>

            <p>Название шаблона</p>
            <input
              onChange={this.nameShablonActions.bind(this)}
              value={nameShablon}
              type="text"
              required
            />

            <p>Описание шаблона</p>
            <textarea
              onChange={this.descriptionActions.bind(this)}
              value={description}
              rows="9"
            />

            <button
              className="mui-btn mui-btn--primary mui-btn--raised"
              disabled={!nextStep}>
              Далее
            </button>

          </form>

        </div>

        <div>
          <h5>Выбор заготовок</h5>

          <div className="img-scrolling">

          {
            ArrImg.map((item, index) => {
              return <img
                onClick={this.choiceImg.bind(this, item)}
                key={index}
                src={item}
                contentEditable></img>
            })
          }

          </div>

        </div>
      </div>
    )

    let nextToPage = (
      <div className="page-welcome__container page-welcome__next">

        <div>
          <h5>Настройка страницы приветствия</h5>
          <form onSubmit={this.nextStepActions.bind(this)}>
            <p>Язык шаблона</p>
            <ul style={{ height: lanToogle ? 'auto' : 30 }} onClick={this.lanToogleActions} className="">
              <li>{language}</li>

              {
                LanArr.map((item, index) => {
                  return <li onClick={this.lanClickActions.bind(this, item)} key={index}>{item}</li>
                })
              }

            </ul>

            <p>Текст Приветствия</p>
            <textarea
              onChange={this.descriptionActions.bind(this)}
              value={description}
              rows="9"
              placeholder={language === "Русский"
              ? "Приветствуем в wi-fi сети"
              : "Welcomethe wi-fi network!" }
            />

            <button
              className="mui-btn mui-btn--primary mui-btn--raised"
              disabled={!nextStep}>
              Далее
            </button>

          </form>

        </div>

        <div>
          <h5>Предпросмотр Шаблона</h5>

          <div className="img-scrolling">

            <img
              onClick={this.choiceImg.bind(this)}
              src='preview_blank.png'
              contentEditable>
            </img>
          </div>

        </div>
      </div>
    )

    return (
      <div className="registrations page-welcome">
        <h2>Редактор шаблонов</h2>
        <h3>Создание новой страницы приветствия</h3>

        {
          twoPage === true
          ? nextToPage
          : OnePage
        }

      </div>
    )
  }
}
