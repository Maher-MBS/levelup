import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard'
import Mask from './Mask'
import gj from './gj.gif'

class App extends Component {

  constructor () {
    super()
    this.handleChoice = this.handleChoice.bind(this);
  }
  
  state = {
    currentWord : this.generateRandomSentence(),
    validLetters : [" ", '.'],
    unvalidLetters : [],
    won: false,
  }

  handleChoice(letter){
    if(this.state.currentWord.includes(letter))
    {
      const list = this.state.validLetters.concat(letter)
      let won = true

      for(var i=0;i<this.state.currentWord.length;i++)
      {
        if(!list.includes(this.state.currentWord[i]))
        {
          won = false
          break
        }
      }

      if(won)
      {
        this.setState({won : true})
      }

      this.setState({validLetters : list})
    }
    else
    {
      const list = this.state.unvalidLetters.concat(letter)
      this.setState({unvalidLetters : list})
    }
  }

  resetState = () => {
    this.setState({
      currentWord : this.generateRandomSentence(),
      validLetters : [' ', '.'],
      unvalidLetters : [],
      won: false,
    })
  }

  generateRandomSentence()
  {
    var randomWords = require('random-words');
    var number = Math.floor(Math.random() * 5) + 1;
    return randomWords({exactly: 1, wordsPerString:number, formatter: (word)=> word.toUpperCase()})[0]
  }

  render () {
    return(
    <div className="pendu">
      <Mask won={this.state.won} word={this.state.currentWord} validLetters={this.state.validLetters} />
      
      {!this.state.won && <Keyboard validLetters={this.state.validLetters} unvalidLetters={this.state.unvalidLetters} handleChoice={this.handleChoice} />}
      {this.state.won && 
      (<div className="text-center">
        <div>
          <img className="goodjob" src={gj} alt="Good Job!"/>
        </div>
        <div className="again">
          <button className="btn btn-warning" onClick={this.resetState}>Play Again !</button>
        </div>
      </div>)}
    </div>
  )
  }
}

export default App;
