import React, { PureComponent } from 'react';
import uploadIcon from 'assets/img/upload.png'

class UploadDocument extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: ''
    }
  }

  fileChangedHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState(...this.state, {selectedFile: event.target.files[0]})
  }

  uploadHandler = () => {
    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
    // axios.post('my-domain.com/file-upload', formData)
  }

  chooseFile = () => {
    this.inputElement.click();
  }

  render() {
    return (
      <div className="upload">
        <input type="file" ref={input => this.inputElement = input} onChange={this.fileChangedHandler}/>
        <img alt="true" src={uploadIcon} className="upload_icon" onClick={this.chooseFile}/>
        <p className="upload_choose_title">
          {
            this.state.selectedFile ? <span>&ensp;&ensp;&ensp;&ensp;{this.state.selectedFile.name}</span>: 'Choose a document'
          }
        </p>
      </div>
    );
  }
}

export default UploadDocument;
