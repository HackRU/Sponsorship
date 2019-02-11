import React, { Component } from "react";
import QrReader from "react-qr-reader";
 
class QRScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result"
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
    fetch('https://143a16aarc.execute-api.us-west-2.amazonaws.com/prod/getResume',{
      method: 'post',
      body: data+".pdf"
    }).then(response=>{
      window.open(response.json().body)
    })
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ maxWidth: "300px", width: "100%", margin: "auto" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QRScanner;