import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>Aggregate</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: "25%", display: 'inline-block'}}>
        <img/>
        <h3>Playlist name</h3>
        <ui>
          <li>Song 1</li>
          <li>Song 2</li>
        </ui>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{...defaultStyle}}>
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
