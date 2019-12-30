import React from 'react'

const Letter = ({won, character, status}) => {
    if(won)
    {
        return (
            <span className="letter shadowWin">
                {character}
            </span>
        )
    }
    else
    return (
    <span className="letter">
        {status === "visible" && character}
        {status === "notvisible" && "_"}
    </span>
    )
}

export default Letter