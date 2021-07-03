import { Component } from 'react';
import './App.css';
import Child from './components/Child'
import React, {useState} from 'react'

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: "",      
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleOnChange = (e) => {
    this.setState({
      search: e.target.value
    })
    console.log("search",e.target.value);
  }

  handleClick = () => {
   
    this.setState({
      search: document.getElementById('searchBox').value='',
      
    })
    
  }

  render(){
    // const [inputText, setInputText] = useState();

    return (
      <div className="App">        
        <Child parentSearch={this.state.search}/>
      </div>
    );
  }
 
}

export default App;
