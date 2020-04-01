import React from 'react'
import { connect } from 'react-redux'
import Header from '../header/index'
import ListPlayers from '../listPlayers/index'
import './style.css'

const Game = ({ players }) => {

    return (
        <main>
            <Header />
            <ListPlayers />
        </main>
    )
}

const mapStateToProps = state => ({
    players: state.game.players
})

export default connect(mapStateToProps)(Game)