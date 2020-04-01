import React from 'react'
import { connect } from 'react-redux'
import { delete_player_action } from '../../redux/actions/gameActions'
import icon from '../../images/icon-player.png'
import './style.css'

const Player = ({ player, visible = false, delete_player_action }) => (
    <article className="item-player">
        <img src={icon} alt={player.name}></img>
        <h3>{player.name}</h3>
        { visible &&
            <button onClick={() => delete_player_action(player) }>Eliminar</button>
        }
    </article>
)

const mapDispatchToProps = {
    delete_player_action
}

export default connect(null, mapDispatchToProps)(Player)