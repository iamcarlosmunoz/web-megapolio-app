import { ADD_PLAYER, DELETE_PLAYER, OPEN_NEW_PLAYER, CLOSE_NEW_PLAYER } from '../actions/gameActions'

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
    }],
    newPlayer: false
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

        case OPEN_NEW_PLAYER: {
            return {
                ...state,
                newPlayer: true
            }
        }

        case CLOSE_NEW_PLAYER: {
            return {
                ...state,
                newPlayer: false
            }
        }

        default: return state
    }
}

export default game
