import React from 'react'
import Player from '../player/index'
import './style.css'

const Page = ({ players, openNewPlayer}) => (
    <section className="container-player-list">
        <div className="container">
            <h2>Jugadores</h2>
            <div className="player-list">
            {
                players.map(player => (
                    <Player 
                        player={player}
                        visible={true}
                    />
                ))
            }
            </div>
        </div>
        <button className="btn-open-add-player" onClick={openNewPlayer}>Nuevo Jugador</button>
    </section>
)

export default Page