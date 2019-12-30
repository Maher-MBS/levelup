import React from 'react'

const Letter = ({character, status}) => (
    <span className="letter">
        {status === "visible" && character}
        {status === "notvisible" && "_"}
    </span>
)

export default Letter