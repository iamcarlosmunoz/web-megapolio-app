export const ADD_PLAYER = 'ADD_PLAYER'
export const DELETE_PLAYER = 'DELETE_PLAYER'
export const OPEN_NEW_PLAYER = 'OPEN_NEW_PLAYER'
export const CLOSE_NEW_PLAYER = 'CLOSE_NEW_PLAYER'

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

export const open_new_player_action = () => {
    return {
        type: OPEN_NEW_PLAYER
    }
}

export const close_new_player_action = () => {
    return {
        type: CLOSE_NEW_PLAYER
    }
}