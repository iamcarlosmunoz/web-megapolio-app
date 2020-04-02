import React from 'react'
import { connect } from 'react-redux'
import Page from './page'

const StateTable = ({ players }) => {

    return (
        <Page 
            players={players}
        />
    )
}

const mapStateToProps = state => ({
    players: state.game.players
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StateTable)