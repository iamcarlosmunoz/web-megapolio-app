import React from 'react'
import { connect } from 'react-redux'
import Header from '../header/index'
import ListPlayers from '../listPlayers/index'
import NewPlayer from '../newPlayer/index'
import StateTable from '../stateTable/index'
import ScannerCode from '../scannerCode/index'
import './style.css'

const Game = ({ newPlayer, startGame }) => {

    return (
        <main>
            <Header />
                {
                    startGame || <ListPlayers />
                }
                {
                    newPlayer && <NewPlayer />
                }
                {
                    startGame && <StateTable />
                }

            <ScannerCode />
        </main>
    )
}

const mapStateToProps = state => ({
    newPlayer: state.game.newPlayer,
    startGame: state.game.startGame
})

export default connect(mapStateToProps)(Game)