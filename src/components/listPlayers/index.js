import React from 'react'
import { connect } from 'react-redux'
import { open_new_player_action } from '../../redux/actions/gameActions'
import Page from './page'

const ListPlayers = ({ players, open_new_player_action }) => {

    function handleOpenNewPlayer(){
        open_new_player_action()
    }

    return (
        <Page 
            players={players}
            openNewPlayer={handleOpenNewPlayer}
        />
    )
}

const mapStateToProps = state => ({
    players: state.game.players
})

const mapDispatchToProps = {
    open_new_player_action
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPlayers)