import React from 'react'
import Page from './page'
import { connect } from 'react-redux'
import { close_new_player_action } from '../../redux/actions/gameActions'

const NewPlayer = ({ close_new_player_action }) => {

    function handleCloseNewPlayer(){
        close_new_player_action()
    }

    return (
        <Page 
            closeNewPlayer={handleCloseNewPlayer}
        />
    )
}

const mapDispatchToProps = {
    close_new_player_action
}

export default connect(null,mapDispatchToProps)(NewPlayer)