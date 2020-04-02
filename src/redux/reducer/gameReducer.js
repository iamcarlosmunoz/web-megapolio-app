import { ADD_PLAYER, DELETE_PLAYER, OPEN_NEW_PLAYER, CLOSE_NEW_PLAYER, START_GAME } from '../actions/gameActions'
import bear from '../../images/avatars/001-bear.png'
import princess from '../../images/avatars/002-princess.png'
import dog from '../../images/avatars/003-dog.png'
import artist from '../../images/avatars/004-artist.png'
import viking from '../../images/avatars/005-viking.png'
import robot from '../../images/avatars/006-robot.png'
import detective from '../../images/avatars/007-detective.png'
import emo from '../../images/avatars/008-emo.png'
import astronaut from '../../images/avatars/009-astronaut.png'
import biker from '../../images/avatars/010-biker.png'
import spy from '../../images/avatars/011-spy.png'
import monkey from '../../images/avatars/012-monkey.png'

const default_game = {
    players: [],
    avatars: [
        {
            id: 1,
            image: bear
        },
        {
            id: 2,
            image: princess
        },
        {
            id: 3,
            image: dog
        },
        {
            id: 4,
            image: artist
        },
        {
            id: 5,
            image: viking
        },
        {
            id: 6,
            image: robot
        },
        {
            id: 7,
            image: detective
        },
        {
            id: 8,
            image: emo
        },
        {
            id: 9,
            image: astronaut
        },
        {
            id: 10,
            image: biker
        },
        {
            id: 11,
            image: spy
        },
        {
            id: 12,
            image: monkey
        }
    ],
    newPlayer: false,
    startGame: false,
    emplyPlayers: true
}

const game = (state = default_game, action) => {

    switch(action.type) {
        
        case ADD_PLAYER: {
            return {
                ...state,
                players: state.players.concat(action.player),
                emplyPlayers: state.players.length < 1
            }
        }

        case DELETE_PLAYER: {
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.player.id),
                emplyPlayers: state.players.length - 1 < 2
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

        case START_GAME: {
            return {
                ...state,
                startGame: true
            }
        }

        default: return state
    }
}

export default game
