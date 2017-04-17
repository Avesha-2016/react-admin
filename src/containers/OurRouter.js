import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as RouterActions from '../actions/RouterActions';

// present Component
import OurRouterPresent from '../presentational/OurRouterPresent/OurRouterPresent';

class OurRouter extends React.Component {

  render() {
    return (
      <OurRouterPresent
        RouterActions={this.props.RouterActions}
        RouterReducer={this.props.RouterReducer}
        platform={this.props.platform}
      />
    );
  }
}

function mapStateToProps(state) {
    return {
        RouterReducer: state.RouterReducer,
        platform: state.PlatformReducer
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        RouterActions: bindActionCreators(RouterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OurRouter)
