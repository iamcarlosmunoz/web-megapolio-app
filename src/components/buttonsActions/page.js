import React from 'react'
import './style.css'

const Page = () => (
    <div className="container-buttons-action">
        <div className="container">
            <div className="container-btn-go">
                <button className="btn-go">
                    <p>COBRAR</p>
                    <p>$200</p>
                </button>
            </div>
            <div className="container-btns">
                <button>SALIR CARCEL</button>
                <button>SUBASTAR PROPIEDAD</button>
            </div> 
        </div>
    </div>
)

export default Page