import React, { PureComponent } from 'react'; 
import { Icon, Row, Col, Button, Layout } from 'antd';
import logo from 'assets/img/logo.png';
import UploadDocument from '../../components/UploadDocument/UploadDocument';

const { Content, Header} = Layout;

class UploadDocContainer extends PureComponent {

  showTakePhotoPage = () => {
    this.props.history.push('upload/take_photo');
  }

  back = () => {
    this.props.history.push('/validation');
  }

  render () {
    return (
      <div className="block">
        <Layout>
          <Header className="header">
            <div onClick={this.back}>
              <Icon style={{ fontSize: 16 }} type="arrow-left" /> <span>BACK</span>
            </div>
          </Header>
          <Layout>
            <Content className="main">
              <Row className="validation_logo_area">
                <Col span={5} offset={5}>
                  <img alt="true" src={logo} className="logo"/>
                </Col>
                <Col span={12} className="title_area">
                  <Row className="row_title"><Col><span  className="logo_title">NO REST</span></Col></Row>
                  <Row className="row_title"><Col><span className="logo_title">LABS</span></Col></Row>
                </Col>
              </Row>
              <Row  className="validation_title_area">
                <Col span={12} offset={6}>
                    <span className="validation_choose_title">&ensp;Upload&ensp;Document</span>
                </Col>
              </Row>
              <Row className="upload_area">
                <Col offset={4} span={16}>
                  <UploadDocument />
                </Col>
              </Row>
              <Row className="upload_btn_area">
                <Col className="take_area" offset={4} span={8}>
                  <Button className="take_btn" onClick={this.showTakePhotoPage}>Take a Picture<Icon style={{ fontSize: 16, color: '#ffffff'}} type="camera" /></Button>
                </Col>
                <Col className="preview_area" span={8}>
                  <Button className="preview_btn">Preview<Icon style={{ fontSize: 16, color: '#ffffff'}} type="eye" /></Button>
                </Col>
              </Row>
              <Row>
                <Col offset={4} span={16}>
                  <Button className="upload_next">NEXT</Button>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }  
}
const mapStateToProps = ({}) => ({
  
});

export default UploadDocContainer;