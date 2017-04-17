import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as SearchLocationActions from '../actions/SearchLocationActions';

// present Component
import LeftPannelPresent from '../presentational/LeftPannelPresent/LeftPannelPresent.js';

class LeftPannel extends React.Component {

  render() {
    return (
      <LeftPannelPresent />
    );
  }
}

function mapStateToProps(state) {
    return {
        locations: state.SearchLocation
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        SearchLocation: bindActionCreators(SearchLocationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPannel)
