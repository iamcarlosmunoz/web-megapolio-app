import React from 'react'
import { connect } from 'react-redux'
import { open_new_player_action, start_game_action } from '../../redux/actions/gameActions'
import Page from './page'

const ListPlayers = ({ players, open_new_player_action, start_game_action,stateGame }) => {

    function handleOpenNewPlayer(){
        open_new_player_action()
    }

    function handleStartGame(){
        start_game_action()
    }

    return (
        <Page 
            players={players}
            openNewPlayer={handleOpenNewPlayer}
            startGame={handleStartGame}
            stateGame={stateGame}
        />
    )
}

const mapStateToProps = state => ({
    players: state.game.players,
    stateGame: state.game.emplyPlayers
})

const mapDispatchToProps = {
    open_new_player_action,
    start_game_action
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPlayers)