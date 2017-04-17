import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as AccountActions from '../actions/AccountActions';
// initialized data
import * as PlatformActions from '../actions/PlatformActions';

// present Component
import TopPannelPresent from '../presentational/TopPannelPresent/TopPannelPresent';

class TopPannel extends React.Component {

  componentDidMount() {
    this.props.PlatformActions.InitialDataPlatform();
  }

  render() {
    return (
      <TopPannelPresent
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
        AccountActions: bindActionCreators(AccountActions, dispatch),
        PlatformActions: bindActionCreators(PlatformActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPannel)
