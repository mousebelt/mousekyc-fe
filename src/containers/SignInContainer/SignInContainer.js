import React, { PureComponent } from 'react'; 
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { connectSettings } from 'core';

class SignInContainer extends PureComponent {

  render () {
    return (
      <div className="home">
        HOME
      </div>
    );
  }  
}
const mapStateToProps = ({settings}) => ({
  currency: settings.currency
});

export default connectSettings(mapStateToProps, {})(SignInContainer);