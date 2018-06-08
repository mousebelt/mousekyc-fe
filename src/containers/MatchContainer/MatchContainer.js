import React, { PureComponent } from 'react'; 
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Icon, Row, Col, Button, Input, Layout, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/en_US';
import { connectAuth, authActionCreators } from 'core';
import { promisify } from '../../utilities';
import logo from 'assets/img/logo.png';

const { Content, Header } = Layout;

class MatchContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  showSelfiePage = () => {
    this.props.history.push('/upload/selfie');
  }

  render () {
    return (
      <div className="block display_match">
        <Layout>
          <Header className="header"></Header>
          <Layout>
            <Content className="main">
              <Row className="sign_logo_area">
                <Col className="mark" span={5} offset={5}>
                  <img alt="true" src={logo} className="logo"/>
                </Col>
                <Col span={12} className="title_area">
                  <Row className="row_title"><Col><span  className="logo_title">NO REST</span></Col></Row>
                  <Row className="row_title"><Col><span className="logo_title">LABS</span></Col></Row>
                </Col>
              </Row>
              <Row  className="validation_title_area">
                <Col span={12} offset={7}>
                    <span className="validation_choose_title">&ensp;Upload&ensp;Document</span>
                </Col>
              </Row>
              <Row className="matched_area">
                <Row className="matched_row">
                    <Col offset={3} span={7}>
                        <span className="label_name">FIRST NAME</span>
                        <Input placeholder="First Name" />
                    </Col>
                    <Col offset={3} span={7}>
                        <span className="label_name">LAST NAME</span>
                        <Input placeholder="Last Name" />
                    </Col>
                </Row>
                <Row className="matched_row">
                    <Col offset={3} span={7}>
                        <span className="label_name">BIRTH DATE</span>
                        <DatePicker placeholder="Birth Date" locale={locale} />
                    </Col>
                    <Col offset={3} span={7}>
                        <span className="label_name">DOCUMENT EXPIRATION</span>
                        <DatePicker placeholder="Document Expiration" locale={locale} />
                    </Col>
                </Row>
                <Row className="matched_row">
                    <Col offset={3} span={7}>
                        <span className="label_name">NATIONALITY</span>
                        <Input placeholder="Nationality" />
                    </Col>
                    <Col offset={3} span={7}>
                        <span className="label_name">DOCUMENT ID</span>
                        <Input placeholder="Document Id" />
                    </Col>
                </Row>
              </Row>
              <Row className="upload_btn_area">
                <Col className="take_area" offset={2} span={6}>
                  <Button className="take_btn">Upload<Icon style={{ fontSize: 16, color: '#ffffff'}} type="upload" /></Button>
                </Col>
                <Col className="preview_area" offset={8} span={6}>
                  <Button className="preview_btn" onClick={this.showSelfiePage}>Processed<Icon style={{ fontSize: 16, color: '#ffffff'}} type="eye" /></Button>
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

export default connectAuth(undefined, mapDisptachToProps)(MatchContainer);