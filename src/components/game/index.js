import React from 'react'
import { connect } from 'react-redux'
import Header from '../header/index'
import ListPlayers from '../listPlayers/index'
import NewPlayer from '../newPlayer/index'
import './style.css'

const Game = ({ players, newPlayer }) => {

    return (
        <main>
            <Header />
            <ListPlayers />
            {
                newPlayer && <NewPlayer />
            }
        </main>
    )
}

const mapStateToProps = state => ({
    players: state.game.players,
    newPlayer: state.game.newPlayer
})

export default connect(mapStateToProps)(Game)