import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as SearchLocationActions from '../actions/SearchLocationActions';

// present Component
import StatisticPresent from '../presentational/StatisticPresent/StatisticPresent';

class Statistics extends React.Component {

  render() {
    return (
      <StatisticPresent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)
