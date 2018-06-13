import React, { PureComponent } from 'react';
import passport from 'assets/img/passport.png';
import idcard from 'assets/img/idcard.png';

class DocumentSelect extends PureComponent {

  constructor() {
    super();
    this.state = {
      docType: 'PASSPORT'
    }
  }

  chooseDocument = (docType) => {
    this.setState(...this.state, {docType: docType});
    this.props.onSelectDoc(docType);
  }

  render() {
    return (
      <div className='doc'>
        <div className={this.state.docType === 'PASSPORT' ? 'doc_passport_selection' : 'doc_passport'} onClick = {() => this.chooseDocument('PASSPORT')}>
          <img alt="true" src={passport} className={this.state.docType === 'PASSPORT' ? 'doc_passport_img_selection' : 'doc_passport_img'} />
        </div>
        <div className={this.state.docType === 'IDCARD' ? 'doc_id_selection' : 'doc_id'} onClick = {() => this.chooseDocument('IDCARD')}>
          <img alt="true" src={idcard} className={this.state.docType === 'IDCARD' ? 'doc_id_img_selection' : 'doc_id_img'} />
        </div>
      </div>
    );
  }
}

export default DocumentSelect;
