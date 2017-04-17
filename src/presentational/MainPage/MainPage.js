import React from 'react';
import { Link } from 'react-router';

// styles
import './MainPage.sass';

// logo Component

export default function MainPage(props) {

  return (

    <div className="main-page">
        <h3>Данная система предоставляет настройку и управление WiFi сетями на вашей плошадке будь то гостиница или отель.</h3>
        <p>Для начала работы перейдите на вкладку <Link to="/platform">Площадки</Link> и создайте свою первую площадку</p>
    </div>

  )

}
