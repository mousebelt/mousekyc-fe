import React, { PureComponent } from 'react';
import passport from 'assets/img/passport.png';
import idcard from 'assets/img/idcard.png';

class DocumentSelect extends PureComponent {

  constructor() {
    super();
    this.state = {
      docType: ''
    }
  }

  chooseDocument = (docType) => {
    this.setState(...this.state, {docType: docType});
    this.props.onSelectDoc(docType);
  }

  render() {
    // const { className, options, ...props } = this.props;

    return (
      <div className='doc'>
        <div className={this.state.docType === 'passport' ? 'doc_passport_selection' : 'doc_passport'} onClick = {() => this.chooseDocument('passport')}>
          <img src={passport} className={this.state.docType === 'passport' ? 'doc_passport_img_selection' : 'doc_passport_img'} />
        </div>
        <div className={this.state.docType === 'idcard' ? 'doc_id_selection' : 'doc_id'} onClick = {() => this.chooseDocument('idcard')}>
          <img src={idcard} className={this.state.docType === 'idcard' ? 'doc_id_img_selection' : 'doc_id_img'} />
        </div>
      </div>
    );
  }
}

export default DocumentSelect;
