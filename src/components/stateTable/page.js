import React from 'react'
import Player from '../player'
import Cash from '../../images/cash.png'
import './style.css'

const Page = ({ players }) => (
    <div className="state-table">
        <div className="container">
        <h2>Jugadores</h2>
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