import React, { Component } from 'react'

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


class Keyboard extends Component {


    render() {
        var handleChoice = this.props.handleChoice;
        return (
        <div className="keyboard">
            {
                alphabet.map((element) => {
                    if(this.props.unvalidLetters.includes(element)) {
                        return <button key={element} className="key btn btn-danger" id={element} onClick={() => handleChoice(element)}>{element}</button>
                    }
                    else if(this.props.validLetters.includes(element))
                    {
                        return <button key={element} className="key btn btn-success" id={element} onClick={() => handleChoice(element)}>{element}</button>
                    }
                    else
                    {
                        return <button key={element} className="key btn btn-primary" id={element} onClick={() => handleChoice(element)}>{element}</button>
                    }
                }
                )
            }
        </div>
    )
    }
}

export default Keyboard