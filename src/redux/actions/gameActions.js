export const ADD_PLAYER = 'ADD_PLAYER'
export const DELETE_PLAYER = 'DELETE_PLAYER'
export const OPEN_ADD_PLAYER = 'OPEN_ADD_PLAYER'
export const CLOSE_ADD_PLAYER = 'CLOSE_ADD_PLAYER'

export const add_player_action = (player) => {
    return {
        type: ADD_PLAYER,
        player
    }
}

export const delete_player_action = (player) => {
    return {
        type: DELETE_PLAYER,
        player
    }
}

export const open_add_player_action = () => {
    return {
        type: OPEN_ADD_PLAYER
    }
}

export const close_add_player_action = () => {
    return {
        type: CLOSE_ADD_PLAYER
    }
}