import React from 'react';
import { Link } from 'react-router';

// srtyles
import './logo.sass';

export default function Logo(props) {

  return (

    <div className="logo-style">
        <Link to="/">
        <img src={require('./img/logo.png')} alt="Alt"></img>
        </Link>
        <span>Interkon</span>
        <p>Управление wifi</p>
        <p>Личный кабинет</p>
        <p>v1.0</p>
    </div>

  )

}
