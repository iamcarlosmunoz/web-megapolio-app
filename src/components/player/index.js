import React from 'react'
import { connect } from 'react-redux'
import icon from '../../images/icon-player.png'
import './style.css'

const Player = ({ player, visible}) => (
    <article className="item-player" key={player.id}>
        <img src={icon} alt={player.name}></img>
        <h3>{player.name}</h3>
        { visible &&
            <button>Eliminar</button>
        }
    </article>
)

export default Player