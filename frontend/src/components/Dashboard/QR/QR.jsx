import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Axios from 'axios'
 
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
      if(data !== this.state.result){
      this.setState({
        result: data
      });
    const params = {
      "email":data +".pdf"
    }
    Axios.post('https://8naoppr7zc.execute-api.us-west-2.amazonaws.com/prod/getresume',params).then(resp=>{
        if(resp.data.statusCode == 200){
            window.open(resp.data.body)
        }
    })
  }
  }
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