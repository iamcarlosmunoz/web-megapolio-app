import React from 'react'
import { connect } from 'react-redux'
import './style/ListPlayer.css'
import icon from '../images/icon-player.png'
import { open_add_player_action, delete_player_action} from '../redux/actions/gameActions'

const ListPlayer = ({ players, open_add_player_action, delete_player_action }) => (
    <section className="container-player-list">
        <div className="container">
            <h2>Jugadores</h2>
            <div className="player-list">
                {
                    players.map(player => (
                        <article key={player.id}>
                            <img src={icon} alt={player.name}></img>
                            <h3>{player.name}</h3>
                            <button onClick={() => delete_player_action(player)} >Eliminar</button>
                        </article>
                    ))
                }
            </div>
        </div>
        <button className="btn-open-add-player" onClick={() => open_add_player_action()}>Nuevo Jugador</button>
    </section>
)

const mapStateToProps = state => ({
    players: state.game.players
})

const mapDispatchToProps = {
    open_add_player_action,
    delete_player_action
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPlayer)