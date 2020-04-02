import React from 'react'
import './style.css'

const Page = ({ closeNewPlayer, avatars, AddPlayer, SelectAvatar, onChange }) => (
    <div id="myModal" className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <h2>Nuevo Jugador</h2>
            </div>
            <div className="modal-body">
                <input onChange={onChange} type="text" className="modal-name-player" placeholder="Ingrese nombre"></input>
                <div className="modal-avartars-list">
                    {
                        avatars.map(element => (
                            <img onClick={() => SelectAvatar(element)}src={element.image} alt={element.id} key={element.id}/>
                        ))
                    }
                </div>
            </div>
            <div className="modal-footer">
                <button onClick={() => AddPlayer()} className="btn-add-player">Crear</button>
                <button onClick={closeNewPlayer} className="btn-cancel-player">Cancelar</button>
            </div>
        </div>
    </div>
)



export default Page