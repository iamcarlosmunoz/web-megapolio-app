import React from 'react'
import Page from './page'
import { connect } from 'react-redux'
import { add_player_action, close_new_player_action } from '../../redux/actions/gameActions'

const NewPlayer = ({ close_new_player_action, avatars, players, add_player_action }) => {

    let id
    try {
        id = (players[players.length - 1 ].id + 1)
    } catch (error) {
        id = 1
    }
    const player = {
        id: id,
        name: '',
        img: null,
        cash: 1500,
        properties: []
    }

    function handleCloseNewPlayer(){
        close_new_player_action()
    }

    function handleSelectAvatar(avatar){
        player.img = avatar.image
    }

    function handleChangeInput(event){
        player.name = event.target.value
    }

    function handleAddNewPlayer(){
        if (player.name !== '' && player.img !== null){
            add_player_action(player) //AÑADIR JUGADOR
            close_new_player_action() //CERRA NEW PLAYER
        }
    }

    return (
        <Page 
            closeNewPlayer={handleCloseNewPlayer}
            avatars={avatars}
            AddPlayer={handleAddNewPlayer}
            SelectAvatar={handleSelectAvatar}
            onChange={handleChangeInput}
        />
    )
}

const mapStateToProps = state => ({
    avatars: state.game.avatars,
    players: state.game.players
})

const mapDispatchToProps = {
    add_player_action,
    close_new_player_action
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPlayer)