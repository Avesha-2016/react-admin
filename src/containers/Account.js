import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as AccountActions from '../actions/AccountActions';

// present Component
import AccountPresent from '../presentational/AccountPresent/AccountPresent';

class Account extends React.Component {

  render() {
    return (
      <AccountPresent
        AccountReducer={this.props.AccountReducer}
        AccountActions={this.props.AccountActions}
      />
    );
  }
}

function mapStateToProps(state) {
    return {
        AccountReducer: state.AccountReducer
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        AccountActions: bindActionCreators(AccountActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
