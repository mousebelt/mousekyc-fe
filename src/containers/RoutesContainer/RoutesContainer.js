import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignInContainer from 'containers/SignInContainer/SignInContainer';
import ValidationContainer from 'containers/ValidationContainer/ValidationContainer';
import UploadDocContainer from 'containers/UploadDocContainer/UploadDocContainer';
import MatchContainer from 'containers/MatchContainer/MatchContainer';
import UploadSelfieContainer from 'containers/UploadSelfieContainer/UploadSelfieContainer';
import TakePhotoContainer from 'containers/TakePhotoContainer/TakePhotoContainer';

class RoutesContainer extends PureComponent {

  componentWillMount() {
  }

  componentWillReceiveProps(newProps) {
  }

  render () {
    return (
      <Switch>
        <Route exact path="/validation" component={ValidationContainer}/>
        <Route exact path="/upload" component={UploadDocContainer}/>
        <Route exact path="/upload/take_photo" component={TakePhotoContainer}/>
        <Route exact path="/upload/match" component={MatchContainer}/>
        <Route exact path="/upload/selfie" component={UploadSelfieContainer}/>
        <Route path="/" component={SignInContainer}/>
        <Redirect to="/404"/>
      </Switch>
    )
  }
}

export default RoutesContainer;