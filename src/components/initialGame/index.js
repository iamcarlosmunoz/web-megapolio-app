import React from 'react'

const InitialGame = ({ newPlayer }) => (
    <>
        <ListPlayers />
        {
            newPlayer && <NewPlayer />
        }
    </>
)