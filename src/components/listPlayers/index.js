import React from 'react'
import { connect } from 'react-redux'
import Page from './page'

const ListPlayers = ({ players}) => {

    return (
        <Page 
            players={players}
        />
    )
}

const mapStateToProps = state => ({
    players: state.game.players
})

export default connect(mapStateToProps)(ListPlayers)