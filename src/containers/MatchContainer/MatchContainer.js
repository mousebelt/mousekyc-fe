import React, { PureComponent } from 'react'; 
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { Icon, Row, Col, Button, Input, Layout, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/en_US';
import { connectAuth, authActionCreators } from 'core';
import { promisify } from '../../utilities';
import logo from 'assets/img/logo.png';

const { Content, Header } = Layout;

class MatchContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      birthday:'',
      document_expire:'',
      nationality: '',
      document_id:'',
      isFilled: false
    }
  }

  onChangeData = (type, evt) => {
    switch(type) {
      case 'firstname':
        this.setState(...this.state, {first_name: evt.target.value});
        break;
      case 'lastname':
        this.setState(...this.state, {last_name: evt.target.value});
        break;
      case 'nationality':
        this.setState(...this.state, {nationality: evt.target.value});
        break;
      case 'documentid':
        this.setState(...this.state, {document_id: evt.target.value});
        break;
    }
  }

  setBirthday = (date, dateString) => {
    this.setState(...this.state, {birthday: dateString});
  }
  
  setDocExpireDate = (date, dateString) => {
    this.setState(...this.state, {document_expire: dateString});
  }

  showUploadPage = () => {
    this.props.history.push('/upload');
  }

  checkInputStatus = () => {
    if(this.state.first_name !== '' && this.state.last_name !== '' && this.state.nationality !== '' && this.state.document_id !== ''
      && this.state.birthday !== '' && this.state.document_expire !== '') {
      this.setState(...this.state, {isFilled: true});
    } else {
      this.setState(...this.state, {isFilled: false});
    }
  }

  showSelfiePage = () => {
    promisify(this.props.updateUser, {
      email: this.props.user.email,
      token: this.props.user.token,
      firstname: this.state.first_name,
      lastname: this.state.last_name,
      dob: this.state.birthday,
      documentExpireDate: this.state.document_expire,
      nationalityCountry: this.state.nationality,
      documentId: this.state.document_id
    })
      .then((user) => {
        console.log(user);
        this.props.history.push('/upload/selfie');
      })
      .catch(e => console.log(e));
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
                        <Input placeholder="First Name" onChange={(evt) => this.onChangeData('firstname', evt)} />
                    </Col>
                    <Col offset={3} span={7}>
                        <span className="label_name">LAST NAME</span>
                        <Input placeholder="Last Name" onChange={(evt) => this.onChangeData('lastname', evt)} />
                    </Col>
                </Row>
                <Row className="matched_row">
                    <Col offset={3} span={7}>
                        <span className="label_name">BIRTH DATE</span>
                        <DatePicker placeholder="Birth Date" locale={locale} onChange={(date, dateString) => this.setBirthday(date, dateString)}/>
                    </Col>
                    <Col offset={3} span={7}>
                        <span className="label_name">DOCUMENT EXPIRATION</span>
                        <DatePicker placeholder="Document Expiration" locale={locale} onChange={(date, dateString) => this.setDocExpireDate(date, dateString)}/>
                    </Col>
                </Row>
                <Row className="matched_row">
                    <Col offset={3} span={7}>
                        <span className="label_name">NATIONALITY</span>
                        <Input placeholder="Nationality" onChange={(evt) => this.onChangeData('nationality', evt)} />
                    </Col>
                    <Col offset={3} span={7}>
                        <span className="label_name">DOCUMENT ID</span>
                        <Input placeholder="Document Id" onChange={(evt) => this.onChangeData('documentid', evt)} />
                    </Col>
                </Row>
              </Row>
              <Row className="upload_btn_area">
                <Col className="take_area" offset={2} span={6}>
                  <Button className="take_btn" onClick={this.showUploadPage}>Upload<Icon style={{ fontSize: 16, color: '#ffffff'}} type="upload" /></Button>
                </Col>
                <Col className="preview_area" offset={8} span={6}>
                  <Button className="preview_btn" disabled={!this.state.isFilled  ? true : false} onMouseEnter={this.checkInputStatus} onClick={this.showSelfiePage}>Processed<Icon style={{ fontSize: 16, color: '#ffffff'}} type="eye" /></Button>
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
  user: auth.user
});

const mapDisptachToProps = (dispatch) => {
  const {
    updateUser
  } = authActionCreators

  return bindActionCreators({
    updateUser
  }, dispatch);
}

export default compose(
  connectAuth(mapStateToProps, mapDisptachToProps),
)(MatchContainer);