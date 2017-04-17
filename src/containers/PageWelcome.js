import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import * as SearchLocationActions from '../actions/SearchLocationActions';

// present Component
import PageWelcomePresent from '../presentational/PageWelcomePresent/PageWelcomePresent';

class PageWelcome extends React.Component {

  render() {
    return (
      <PageWelcomePresent />
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

export default connect(mapStateToProps, mapDispatchToProps)(PageWelcome)
