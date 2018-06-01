import React, { PureComponent } from 'react'; 
import { withRouter } from 'react-router-dom';
import { Icon, Row, Col, Button, Input, Layout } from 'antd';
import { connectSettings } from 'core';
import logo from 'assets/img/logo.png';

const { Content, Header, Footer } = Layout;

class SignInContainer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isFocus: false
    }
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
                <Col span={5} offset={5}>
                  <img src={logo} className="logo"/>
                </Col>
                <Col span={12} className="title_area">
                  <Row className="row_title"><Col><span  className="logo_title">NO REST</span></Col></Row>
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
const mapStateToProps = ({settings}) => ({
  currency: settings.currency
});

export default connectSettings(mapStateToProps, {})(SignInContainer);