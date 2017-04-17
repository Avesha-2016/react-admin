import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as PlatformActions from '../actions/PlatformActions';

// present Component
import PlatformPresent from '../presentational/PlatformPresent/PlatformPresent';

class Platform extends React.Component {

  render() {
    return (
      <PlatformPresent
        PlatformActions={this.props.PlatformActions}
        platform={this.props.platform}
      />
    );
  }
}

function mapStateToProps(state) {
    return {
        platform: state.PlatformReducer
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        PlatformActions: bindActionCreators(PlatformActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform)
