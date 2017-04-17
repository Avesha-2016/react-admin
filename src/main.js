import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import jwt from 'jsonwebtoken';
import moment from 'moment';

// container component
import LeftPannel from './containers/LeftPannel';
import TopPannel from './containers/TopPannel';
import RegistrationUsers from './containers/RegistrationUsers';
import Platform from './containers/Platform';
import Statistics from './containers/Statistics';
import Account from './containers/Account';
import OurRouter from './containers/OurRouter';
import PageWelcome from './containers/PageWelcome';

//present component
import MainPage from './presentational/MainPage/MainPage';

// initial Login Form Component
import LoginForm from './containers/LoginForm';

// main styles
import './css/normalize.css';
import './css/tuesday.min.css';
import './css/all.sass';

// redux store
const store = configureStore();

// Initial Component
class App extends React.Component {

  render() {
    const Platform = (
      <div className="wrapper">
          <header>
            <LeftPannel />
            <div className="right-pannel-wrapper">
              <TopPannel />
                <div className="under-pannel">
                    {this.props.children}
                </div>
            </div>
          </header>
      </div>
    )

    return (

      localStorage.getItem('token') ? <div>{Platform}</div> : <LoginForm />

    );
  }
}

// wrapper HTM -> v.3
const renderHot = Component => {
  render(
    <Provider store={store}>
      <Router key={Math.random()} history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MainPage}></IndexRoute>
            <Route path="registrations" component={RegistrationUsers}/>
            <Route path="platform" component={Platform}/>
            <Route path="statistics" component={Statistics}/>
            <Route path="account" component={Account}/>
            <Route path="routers" component={OurRouter}/>
            <Route path="pagewelcome" component={PageWelcome}/>
        </Route>
      </Router>
    </Provider>
    ,document.getElementById('mount-point')
  )
}

renderHot(Provider)

  if (module.hot) {
    module.hot.accept(Provider, () => {
      renderHot(Provider)
    });
}
