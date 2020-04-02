import React from 'react'
import Player from '../player/index'
import './style.css'

const Page = ({ players, openNewPlayer, startGame, stateGame}) => (
    <section className="container-player-list">
        <div className="container">
            <h2>Jugadores</h2>
            <div className="player-list">
            {
                players.map(player => (
                    <Player 
                        player={player}
                        visible={true}
                        key={player.id}
                    />
                ))
            }
            </div>
        </div>
        <button className="btn-open-add-player" onClick={openNewPlayer}>Nuevo Jugador</button>
        <button disabled={stateGame} className="btn-start-game" onClick={startGame}>Iniciar Juego</button>
    </section>
)

export default Page