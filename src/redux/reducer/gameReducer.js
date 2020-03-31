import { ADD_PLAYER, DELETE_PLAYER, OPEN_ADD_PLAYER, CLOSE_ADD_PLAYER } from '../actions/gameActions'

const default_game = {
    players: [
    {
        id: 1,
        name: 'Carlos',
        img: '../images/icon-player.png'
    },
    {
        id: 2,
        name: 'Carlos',
        img: '../images/icon-player.png'
    },
    {
        id: 3,
        name: 'Carlos',
        img: '../images/icon-player.png'
    },
    {
        id: 4,
        name: 'Carlos',
        img: '../images/icon-player.png'
    },
    {
        id: 5,
        name: 'Carlos',
        img: '../images/icon-player.png'
    },
    {
        id: 6,
        name: 'Carlos',
        img: '../images/icon-player.png'
    }]
}

const game = (state = default_game, action) => {

    switch(action.type) {
        
        case ADD_PLAYER: {
            return {
                ...state,
                players: state.players.concat(action.player)
            }
        }

        case DELETE_PLAYER: {
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.player.id)
            }
        }

        case OPEN_ADD_PLAYER: {
            document.getElementById("myModal").style.display = 'block';
            return state
        }

        case CLOSE_ADD_PLAYER: {
            document.getElementById("myModal").style.display = 'none';
            return state
        }

        default: return state
    }
}

export default game
