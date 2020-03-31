import React from 'react'
import './style/NewPlayer.css'
import { connect } from 'react-redux'
import { close_add_player_action } from '../redux/actions/gameActions'

const NewPlayer = ({ close_add_player_action }) => (
    <div id="myModal" className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <span onClick={() => close_add_player_action()} className="close">&times;</span>
                <h2>Nuevo Jugador</h2>
            </div>
                <div className="modal-body">
                <p>Some text in the Modal Body</p>
                <p>Some other text...</p>
            </div>
            <div className="modal-footer">
                <h3>Modal Footer</h3>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = {
    close_add_player_action
}

export default connect(null,mapDispatchToProps)(NewPlayer)