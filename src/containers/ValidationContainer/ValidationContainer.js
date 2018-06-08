import React, { PureComponent } from 'react'; 
import { Icon, Row, Col, Button, Layout } from 'antd';
import DocumentSelect from '../../components/DocumentSelect/DocumentSelect';
import DropdownSelect from '../../components/DropdownSelect/DropdownSelect';
import logo from 'assets/img/logo.png';

const { Content, Header } = Layout;

class ValidationContainer extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isFocus: false
    }
  }

  showUploadDocPage = () => {
    this.props.history.push('/upload');
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
              <Icon style={{ fontSize: 16 }} type="arrow-left"/> <span>BACK</span>
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
                    <span className="validation_choose_title">Choose&ensp;A&ensp;Document</span>
                </Col>
              </Row>  
              <Row className="document_area">
                <Col offset={4} span={16}>
                    <DocumentSelect onSelectDoc={(docType) => console.log('docType:', docType)} />
                </Col>
              </Row>
              <Row className="document_type_area">
                <Col className="document_type_title" offset={4} span={7}>
                    <span>Passport</span>
                </Col>
                <Col className="document_type_title" offset={2} span={7}>
                    <span>ID Card</span>
                </Col>
              </Row>
              <Row className="document_region_area">
                <Col offset={4} span={16}>
                  <DropdownSelect  className="document_region_select" placeholder="Region"/>
                </Col>
              </Row>
              <Row>
                <Col offset={4} span={16}>
                  <Button className="continue_btn" onClick={this.showUploadDocPage}>NEXT</Button>
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

export default ValidationContainer;