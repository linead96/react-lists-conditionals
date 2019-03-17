import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputText: '',
    inputTextLength: 0,
  }

  inputTextChangedHandler = (event) => {
    const inputText = event.target.value
    this.setState({
      inputText: inputText,
      inputTextLength: inputText.length,
    })
  }

  deleteCharComponent = (index) => {
     let inputText = [...this.state.inputText];
     inputText.splice(index, 1);
     this.setState({
       inputText: inputText.join(''),
     })
  }

  render() {
  
  let chars = null;
  
  chars = this.state.inputText.split('').map((char,index) => {
    return <CharComponent 
      char={char}
      click={()=>this.deleteCharComponent(index)}/>
  });

    return (
      <div className="App">
        <input 
          type="text" 
          onChange={(event) => this.inputTextChangedHandler(event)} 
          value={this.state.inputText}/>
        <p>Text Length: {this.state.inputTextLength}</p>
        <ValidationComponent textLength={this.state.inputTextLength}/>
        {chars}
      </div>
    );
  }
}

export default App;
