import React, { PureComponent } from 'react'; 
import Webcam from 'react-webcam';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { Icon, Row, Col, Button, Layout } from 'antd';
import { connectAuth, authActionCreators } from 'core';
import { promisify } from '../../utilities';
import logo from 'assets/img/logo.png';

const { Content, Header } = Layout;

class TakePhotoContainer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      imageSrc: '',
      uploadType: ''
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      let uploadType = this.props.location.state.uploadType;
      this.setState(...this.state, {uploadType: uploadType});
    }
  }

  uploadDocument = () => {
    if (this.state.uploadType === 'document') {
      if (this.state.imageSrc !== '' && this.props.user && this.props.docType) {
        promisify(this.props.updateIdentity, { 
          token: this.props.user.token,
          documentType: this.props.docType,
          identityDocument: this.state.imageSrc
        })
          .then((userInfo) => {
            this.props.history.push('match');
          })
          .catch(e => console.log(e));
      }
    } else if (this.state.uploadType === 'selfie') {
      if (this.state.imageSrc !== '' && this.props.user) {
        promisify(this.props.updateSelfie, { 
          email: this.props.user.email,
          token: this.props.user.token,
          selfie: this.state.imageSrc
        })
          .then((userInfo) => {
          })
          .catch(e => console.log(e));
      }
    }
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  takePicture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState(...this.state, {imageSrc: imageSrc});
  }

  RetakePicture = () => {
    this.setState(...this.state, {imageSrc: null});
  }
  
  back = () => {
    this.props.history.goBack();
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
                <Col span={14} offset={5}>
                  <img alt="true" src={logo} className="logo"/>
                </Col>
              </Row>
              {/* <Row className="validation_logo_area">
                <Col span={12} className="title_area">
                  <Row className="row_title"><Col><span  className="logo_title">NO REST</span></Col></Row>
                  <Row className="row_title"><Col><span className="logo_title">LABS</span></Col></Row>
                </Col>
              </Row> */}
              <Row  className="validation_title_area">
                <Col span={12} offset={7}>
                    <span className="validation_choose_title">&ensp;Take&ensp;A&ensp;Picture</span>
                </Col>
              </Row>
              <Row className="preview_camera">
                <Col offset={4} span={16}>
                  {
                    !this.state.imageSrc ?
                    <Webcam className="webcam"
                      audio={false}
                      ref={this.setRef}
                      screenshotFormat="image/jpeg"
                    /> :
                    <img alt="true" className="screenshot" src={this.state.imageSrc}/>
                  }
                </Col>
              </Row>
              <Row className="upload_btn_area">
                <Col className="take_area" offset={4} span={8}>
                  <Button disabled={this.state.imageSrc ? true : false} className="take_btn" onClick={this.takePicture}>
                    Take a Picture<Icon style={{ fontSize: 16, color: '#ffffff'}} type="camera" />
                  </Button>
                </Col>
                <Col className="preview_area" span={8}>
                  <Button disabled={!this.state.imageSrc ? true : false} className="preview_btn" onClick={this.RetakePicture}>
                    Retake<Icon style={{ fontSize: 16, color: '#ffffff'}} type="eye" />
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col offset={4} span={16}>
                  <Button className={this.state.imageSrc === '' ? "continue_btn" : "continue_enable_btn"} disabled={this.state.imageSrc === '' ? true : false} onClick={this.uploadDocument}>NEXT</Button>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }  
}

const mapStateToProps = ({auth}) => ({
  user: auth.user,
  docType: auth.docType
});

const mapDisptachToProps = (dispatch) => {
  const {
    updateIdentity,
    updateSelfie
  } = authActionCreators

  return bindActionCreators({
    updateIdentity,
    updateSelfie
  }, dispatch);
}

export default compose(
  connectAuth(mapStateToProps, mapDisptachToProps),
)(TakePhotoContainer);