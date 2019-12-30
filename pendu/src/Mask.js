import React from 'react'
import Letter from './Letter'

const Mask = ({word, validLetters}) => (

    <div className="mask">
        {
            generateArray(word, validLetters).map((element) => (
                <Letter key={element[0]} character={element[1]} status={element[2]} />
            )
        )}
    </div>
)

const generateArray = (word, validLetters) =>
{
    const splitted = word.toUpperCase().split("")
    const result = []
    
    for(var i=0;i<splitted.length;i++)
    {
        if(validLetters.includes(splitted[i]))
        {
            result.push([i,splitted[i], "visible"])
        }
        else
        {
            result.push([i,splitted[i],"notvisible"])
        }
        
    }

    console.log(result)

    return result;
}

export default Mask