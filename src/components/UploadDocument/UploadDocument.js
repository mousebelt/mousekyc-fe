import React, { PureComponent } from 'react';
import uploadIcon from 'assets/img/upload.png'

class UploadDocument extends PureComponent {
  render() {
    // const { className, options, ...props } = this.props;

    return (
      <div className="upload">
        <img src={uploadIcon} className="upload_icon"/>
        <p className="upload_choose_title">Choose a document</p>
      </div>
    );
  }
}

export default UploadDocument;
