import React, { PureComponent } from 'react'; 
import Webcam from 'react-webcam';
import { Icon, Row, Col, Button, Layout } from 'antd';
import logo from 'assets/img/logo.png';

const { Content, Header } = Layout;

class TakePhotoContainer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      imageSrc: ''
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
    this.props.history.push('/upload');
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

export default TakePhotoContainer;