import React from 'react';

// styles
import './styles/LeftPannelPresent.sass';

// logo Component
import Logo from './Logo/Logo';
import Navigations from './Navigations/Navigations';

export default function LeftPannelPresent(props) {

  return (

    <div className="left-pannel">
        <Logo />
        <Navigations />
    </div>

  )

}
