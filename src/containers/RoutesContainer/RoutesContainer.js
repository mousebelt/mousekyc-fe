import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import qs from 'query-string';
import { isEqual } from 'lodash';

import { connectSettings, settingsActionCreators } from 'core';

import SignInContainer from 'containers/SignInContainer/SignInContainer';
import ValidationContainer from 'containers/ValidationContainer/ValidationContainer';
import UploadDocContainer from 'containers/UploadDocContainer/UploadDocContainer';
import TakePhotoContainer from 'containers/TakePhotoContainer/TakePhotoContainer';

class RoutesContainer extends PureComponent {

  componentWillMount() {
  }

  componentWillReceiveProps(newProps) {
  }

  render () {
    return (
      <Switch>
        <Route exact path="/signin" component={SignInContainer}/>
        <Route exact path="/validation" component={ValidationContainer}/>
        <Route exact path="/upload" component={UploadDocContainer}/>
        <Route exact path="/upload/take_photo" component={TakePhotoContainer}/>
        <Redirect to="/404"/>
      </Switch>
    )
  }
}

RoutesContainer.propTypes = {
}

const mapDisptachToProps = (dispatch) => {
  const {
    setSettings
  } = settingsActionCreators;

  return bindActionCreators({
    setSettings
  }, dispatch);
}

export default connectSettings(undefined, mapDisptachToProps)(RoutesContainer);