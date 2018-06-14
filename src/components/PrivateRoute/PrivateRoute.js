import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connectAuth } from 'core';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { user, ...props } = this.props;

    if (user.token) {
      return (
        <Route {...props}/>
      );
    } else {
      return (
        <Redirect to="/signin"/>
      );
    }
  }
}
const mapStateToProps = ({auth}) => ({
  user: auth.user
});
export default connectAuth(mapStateToProps, {})(PrivateRoute);