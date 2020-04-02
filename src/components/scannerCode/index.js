import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class ScannerCode extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '40%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default ScannerCode