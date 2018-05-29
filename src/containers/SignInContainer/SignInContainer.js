import React, { PureComponent } from 'react'; 
import { withRouter } from 'react-router-dom';
import { Row, Col, Button, Input, Layout } from 'antd';
import { connectSettings } from 'core';
import logo from 'assets/img/logo.png';
const { Content, Header, Footer } = Layout;

class SignInContainer extends PureComponent {

  constructor() {
    super();
    this.state = {
      isFocus: false
    }
  }

  handleClick = () => {
    this.setState(...this.state, {isFocus: true});
  }

  render () {
    return (
      <div className="block">
        <Layout>
          <Header className="header"></Header>
          <Layout>
            <Content className="main">
              <Row className="logo_area">
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
                  <Input placeholder="Email Address" onClick={this.handleClick}/>
                </Col>
              </Row>
              <Row>
                <Col offset={4} span={16}>
                  <Button className="continue_btn">CONTINUE</Button>
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