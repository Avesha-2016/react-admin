import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as RegVisitorActions from '../actions/RegVisitorActions';

// present Component
import RegUsersPresent from '../presentational/RegUsersPresent/RegUsersPresent';

class Registrations extends React.Component {

  render() {
    return (
      <RegUsersPresent
        RegVisitorActions={this.props.RegVisitorActions}
        PlatformReducer={this.props.PlatformReducer}
      />
    );
  }
}

function mapStateToProps(state) {
    return {
        PlatformReducer: state.PlatformReducer
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        RegVisitorActions: bindActionCreators(RegVisitorActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registrations)
