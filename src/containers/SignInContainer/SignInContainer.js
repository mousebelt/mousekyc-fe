import React, { PureComponent } from 'react'; 
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Icon, Row, Col, Button, Input, Layout } from 'antd';
import { connectAuth, authActionCreators } from 'core';
import logo from 'assets/img/logo.png';

const { Content, Header } = Layout;

class SignInContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        token: PropTypes.string,
      }),
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocus: false
    }
    console.log(this.props.match.params.token);
  }

  handleEmail = () => {
    this.setState(...this.state, {isFocus: true});
  }

  showValidationPage = () => {
    this.props.history.push('/validation');
  }

  render () {
    return (
      <div className="block">
        <Layout>
          <Header className="header"></Header>
          <Layout>
            <Content className="main">
              <Row className="sign_logo_area">
                <Col span={5} offset={5}connectAuth>
                  <img alt="true" src={logo} className="logo"/>
                </Col>
                <Col span={12} className="title_area">
                  <Row className="authActionCreatorsrow_titlbindActionCreatorse"><Col><span  className="logo_title">NO REST</span></Col></Row>
                  <Row className="row_title"><Col><span className="logo_title">LABS</span></Col></Row>
                </Col>
              </Row>
              <Row className="email_area">
                <Col offset={4} span={16}>
                  { this.state.isFocus ?
                  <span className="label_name">Email Address</span>
                  : null
                  }
                  <Input placeholder="Email Address" onClick={this.handleEmail} suffix={<Icon style={{ fontSize: 16, color: '#3cb878' }} type="check-circle" /> }/>
                  {/* <Input placeholder="Email Address" onClick={this.handleClick} suffix={<Icon style={{ fontSize: 16, color: '#e34132' }} type="question-circle" /> }/> */}
                </Col>
              </Row>
              <Row>
                <Col offset={4} span={16}>
                  <Button className="continue_btn" onClick={this.showValidationPage}>CONTINUE</Button>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }  
}
const mapDisptachToProps = (dispatch) => {
  const {
    login
  } = authActionCreators;

  return bindActionCreators({
    login
  }, dispatch);
}

export default connectAuth(undefined, mapDisptachToProps)(SignInContainer);