import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as LoginFormActions from '../actions/LoginFormActions';

// present Component
import LeftFormPresent from '../presentational/LoginFormPresent/LoginFormPresent';

class LoginForm extends React.Component {

  render() {

    return (
      <LeftFormPresent
        LoginFormActions={this.props.LoginFormActions}
        LoginForm={this.props.LoginForm}
      />
    );
  }
}

function mapStateToProps(state) {
    return {
        LoginForm: state.LoginForm
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        LoginFormActions: bindActionCreators(LoginFormActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
