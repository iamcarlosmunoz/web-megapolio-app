import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import './style.css'
 
const ScannerCode = () => {

  const [result, setResult] = useState('No result')

  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="container-camera-scanner">
      <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '400px' }}
          facingMode={'environment'}
          className={'camera-item'}
        />
    </div>
  )
  
}

export default ScannerCode