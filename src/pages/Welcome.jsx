import React from 'react'
import ListPlayer from '../components/ListPlayer'
import Header from '../components/Header'
import './style/Welcome.css'
import NewPlayer from '../components/NewPlayer'

const Welcome = () => (
    <div className="container-welcome">
        <Header />
        <ListPlayer />
        <NewPlayer />
    </div>
)

export default Welcome