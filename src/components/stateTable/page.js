import React from 'react'
import Player from '../player'
import Cash from '../../images/cash.png'
import './style.css'

const Page = ({ players }) => (
    <div className="state-table">
        <h2>Tabla de Jugadores</h2>
        <div className="container">
            {
                players.map( player => (
                    <div className="player" key={player.id}>
                        <Player
                            player={player}
                            visible={false}
                        />
                        <div className="states">
                            <div className="item-state cash"><img src={Cash} alt="cash icon" /> {player.cash}</div>
                            <div className="item-state">En juego</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Page